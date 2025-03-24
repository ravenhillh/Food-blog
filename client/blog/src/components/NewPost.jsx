import { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addNewPost } from "../utils/util";
import { Hanko } from "@teamhanko/hanko-elements";
const hankoApi = "https://b1ab3632-446a-4d30-a451-58761db04408.hanko.io";

const NewPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // add an image string state variable to send in post request
  const hanko = useMemo(() => new Hanko(hankoApi), []);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      return navigate("/");
    }
  }, [navigate]);

  const logout = () => {
    hanko.user.logout().catch((error) => {
      console.error(error);
    });
  };

  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        alert("File size exceeds 5MB. Please choose a smaller file.");
        setSelectedFile(null);
        setPreview(null);
        event.target.value = ""; // Reset input field
        return;
      }
  
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file)); //
  }
}

  const formatRecipe = (recipe) => {
    return recipe
      .split(/(\d+\.)/)
      .map((part, index) => {
        if (index % 2 === 1) {
          return `\n${part}`;
        }
        return part;
      })
      .join("")
      .trim();
  };

  const redirectAfterLogout = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  useEffect(
    () =>
      hanko.onUserLoggedOut(() => {
        redirectAfterLogout();
        localStorage.removeItem("loggedIn");
      }),
    [hanko, redirectAfterLogout]
  );

  //👇🏻 format the date to a readable string
  const formatDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  //👇🏻 executes on form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //👇🏻 adds the new post
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("title", title);
    formData.append("content", formatRecipe(content));
    formData.append("date", formatDate())
    formData.append("u_id", localStorage.getItem("u_id"))
    addNewPost(
      formData,
      navigate
    );
    setContent("");
    setTitle("");
    setSelectedFile(null);
    setPreview(null);
    e.target.reset();
  };

  return (
    <div>
      <nav
        className="new-post-navbar"
        style={{
          width: "100%",
          height: "10vh",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          position: "sticky",
          top: "0",
          background: "black",
        }}
      >
        <Link to="/" className="logo">
          <h2 style={{ fontSize: "4em" }}>🍳</h2>
        </Link>
        <button className="newPostBtn logOut" onClick={logout}>
          Log out
        </button>
      </nav>
      <main className="main">
        <h2 className="heading">Create new post</h2>
        <form className="newPost_form" onSubmit={handleSubmit}>
          <label htmlFor="title" className="label">
            Title
          </label>
          <input
            type="text"
            className="newPost_title"
            id="title"
            name="title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="content" className="label">
            Content
          </label>
          <textarea
            rows={10}
            className="newPost_content"
            value={content}
            required
            onChange={(e) => setContent(e.target.value)}
          />
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {preview && (
            <div>
              <h3>Preview:</h3>
              <img
                src={preview}
                alt="Preview"
                style={{ width: "200px", marginTop: "10px" }}
              />
            </div>
          )}
          <button className="newPostBtn submitBtn" type="submit">
            Create Post
          </button>
        </form>
      </main>
    </div>
  );
};

export default NewPost;
