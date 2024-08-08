import { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addNewPost } from "../utils/util";
import { Hanko } from "@teamhanko/hanko-elements";
const hankoApi = "https://b1ab3632-446a-4d30-a451-58761db04408.hanko.io";

const NewPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const hanko = useMemo(() => new Hanko(hankoApi), []);

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
    addNewPost(
      localStorage.getItem("u_id"),
      title,
      content,
      formatDate(),
      navigate
    );
    setContent("");
    setTitle("");
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="logo">
          <h2>Jon Hill Recipes</h2>
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
          <button className="newPostBtn submitBtn" type="submit">
            Create Post
          </button>
        </form>
      </main>
    </div>
  );
};

export default NewPost;
