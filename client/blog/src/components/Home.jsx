import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPosts } from "../utils/util";
// import Bio from "./Bio";
// import Photos from "./Photos";
import Contacts from "./Contacts";
import Beach from "/assets/hawaii.jpeg";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = useCallback(() => {
    fetchAllPosts(setLoading, setPosts);
  }, []);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const dateObj = new Date(date.replace(/-/g, "/"));
    return dateObj.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      setLoggedIn(true);
    }
    fetchPosts();
  }, [fetchPosts]);

  // if (loading) return <p>Loading...</p>;

  return (
    <div style={{ backgroundColor: "navajowhite" }}>
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
            <h2 style={{ fontSize: "3em" }}>🌿</h2>
          </Link>
          <div
            style={{ display: "flex", gap: "2rem", alignItems: "center", }}
            className="nav-links"
          >
            <Link to="/bio" style={{ textDecoration: "none", color: "black", }}>
              <h2 style={{fontFamily: "fantasy"}}>About</h2>
            </Link>{" "}
            <Link to="/photos" style={{ textDecoration: "none", color: "black", }}>
              <h2 style={{fontFamily: "fantasy"}}>Gallery</h2>
            </Link>
            <Link to="/contacts" style={{ textDecoration: "none", color: "black", }}>
              <h2 style={{fontFamily: "fantasy"}}>Contacts</h2>
            </Link>
            <Link to="/subscribe" style={{ textDecoration: "none", color: "black", }}>
              <h2 style={{fontFamily: "fantasy"}}>Subscribe</h2>
            </Link>
            <Link to="/recipe" style={{ textDecoration: "none", color: "black", }}>
              <h2 style={{fontFamily: "fantasy"}}>Recipe Index</h2>
            </Link>
            <Link to="/archives" style={{ textDecoration: "none", color: "black", }}>
              <h2 style={{fontFamily: "fantasy"}}>Archives</h2>
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
          className="landing-box"
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            height: "40vh",
            margin: "40px",
          }}
        >
          <h1
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              zIndex: "1",
              color: "black",
              fontFamily: "fantasy",
              fontSize: "3rem",
            }}
            className="landing-header"
          >
            JON HILL CULINARY BLOG
          </h1>
          <div
            style={{
              width: "100%",
              height: "auto",
              overflow: "hidden",
              borderRadius: "25px",
            }}
            className="landing-image"
          >
            <img
              src={Beach}
              alt="title box image"
              style={{ width: "95%", borderRadius: "25px" }}
            />
          </div>
        </div>
      </div>
      <main className="main">
        {/* <Bio />
        <Photos /> */}

        <div className="posts_container">
          <h2
            className="title"
            style={{ fontWeight: "300", fontFamily: "fantasy" }}
          >
            Latest Posts
          </h2>
          {posts?.map((post) => (
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
                  {post.content.split("\n").map((line, i) => (
                    <div key={i}>
                      {line}
                      <br />
                    </div>
                  ))}
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
