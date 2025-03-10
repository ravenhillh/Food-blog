import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPosts } from "../utils/util";
// import Bio from "./Bio";
// import Photos from "./Photos";
import Contacts from "./Contacts";
import Beach from "/assets/IMG_1281.jpeg";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = useCallback(() => {
    fetchAllPosts(setLoading, setPosts);
  }, []);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  const formatRecipe = (recipe) => {
    return recipe.replace(/(\d+\.)/g, '\n$1');
  }

  useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      setLoggedIn(true);
    }
    fetchPosts();
  }, [fetchPosts]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div className="landing">
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="navbar"
        >
          <Link to="/" className="logo">
            <h2 style={{ fontSize: "4em" }}>🌿</h2>
          </Link>
          <div
            style={{ display: "flex", gap: "2rem", alignItems: "center" }}
            className="nav-links"
          >
            <Link to="/bio" className="logo">
              <h2>About</h2>
            </Link>
            <Link to="/photos" className="logo">
              <h2>Gallery</h2>
            </Link>
            <Link to="/stories" className="logo">
              <h2>Stories</h2>
            </Link>
            <Link to="/contact" className="logo">
              <h2>Contact</h2>
            </Link>
            <div style={{ display: "flex", alignItems: "center" }}>
              {loggedIn ? (
                <Link to="/post/new" className="newPostBtn">
                  New Post
                </Link>
              ) : (
                <Link to="/login" className="newPostBtn">
                  Log in
                </Link>
              )}
            </div>
          </div>
        </nav>
        <div
          className="titleBox"
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            height: "40vh",
          }}
        >
          <h1
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              zIndex: "1",
              color: "white",
              fontSize: "50px",
            }}
          >
            THE PONDERING CHEF
          </h1>
          <div style={{ width: "100%", height: "auto", overflow: "hidden" }}>
            <img
              src={Beach}
              alt="title box image"
              style={{ width: "100%", marginTop: "-25%" }}
            />
          </div>
        </div>
      </div>
      <main className="main">
        {/* <Bio />
        <Photos /> */}

        <div className="posts_container">
          <h2 className="title" style={{ fontWeight: "300" }}>
            Latest Posts
          </h2>
          {posts?.map((post) => (
            //fix styling so that the title, date and content are stacked below
            //change the way content is display so that it adds in new line characters where cooking steps are written
            //add in photo import and storage on s2 buckets
            //get a good photo of dad
            <div
              key={post.post_id}
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Link to={`/post/${post.slug}`} className="post">
                <h2 className="post_title">{post.title}</h2>
                <p style={{ textDecoration: "none", color: "black" }}>
                  {formatDate(post.published_date)}
                </p>
                <p style={{ textDecoration: "none", color: "black" }}>
                  {formatRecipe(post.content)}
                </p>
              </Link>
            </div>
          ))}
        </div>
        <Contacts />
      </main>
    </div>
  );
};
export default Home;
