import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPosts } from "../utils/util";

import Contacts from "./Contacts";
import Beach from "/assets/hawaii.jpeg";
import chefImage from "/assets/IMG_1281.jpeg";

//DELETE THE DAILY DOODLE IMAGES FROM FOOD-BLOG BUCKET AND CHANGE BUCKET???
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
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };

  useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      setLoggedIn(true);
    }
    fetchPosts();
  }, [fetchPosts]);

  // if (loading) return <p>Loading...</p>;

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="navbar-regular">
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="navbar"
        >
          <Link
            to="/"
            className="logo"
            style={{ display: "flex", gap: "2rem", alignItems: "center" }}
          >
            <h2 style={{ fontSize: "3em" }}>🌿</h2>
            <h2
              style={{
                fontFamily: "Winky Sans",
                fontSize: "30px",
                fontWeight: "200",
              }}
            >
              Recipes & Stories
            </h2>
          </Link>
          <div
            style={{ display: "flex", gap: "2rem", alignItems: "center" }}
            className="nav-links"
          >
            <Link to="/bio" style={{ textDecoration: "none", color: "black" }}>
              <h2 style={{ fontFamily: "Winky Sans", fontWeight: "100" }}>
                About
              </h2>
            </Link>{" "}
            <Link
              to="/photos"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h2 style={{ fontFamily: "Winky Sans", fontWeight: "100" }}>
                Gallery
              </h2>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h2 style={{ fontFamily: "Winky Sans", fontWeight: "100" }}>
                Contacts
              </h2>
            </Link>
            {/* <Link to="/subscribe" style={{ textDecoration: "none", color: "black", }}>
              <h2 >Subscribe</h2>
            </Link>
            <Link to="/recipe" style={{ textDecoration: "none", color: "black", }}>
              <h2 >Recipe Index</h2>
            </Link>
            <Link to="/archives" style={{ textDecoration: "none", color: "black", }}>
              <h2 >Archives</h2>
            </Link> */}
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
      </div>
      <nav className="hamburger-nav">
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <h2 style={{ fontSize: "3em" }}>🌿</h2>
          <h2
            style={{
              fontFamily: "Winky Sans",
              fontSize: "20px",
              fontWeight: "200",
            }}
          >
            Recipes & Stories
          </h2>
        </div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className="menu-links"
            style={{
              position: "absolute",
              zIndex: 1000,
              background: "white",
              borderRadius: "5px",
              fontFamily: "Winky Sans",
            }}
          >
            <li>
              <a
                href="bio"
                onClick={toggleMenu}
                style={{ fontFamily: "Winky Sans", fontWeight: "100" }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="photos"
                onClick={toggleMenu}
                style={{ fontFamily: "Winky Sans", fontWeight: "100" }}
              >
                Photos
              </a>
            </li>
            <li>
              <a
                href="contact"
                onClick={toggleMenu}
                style={{ fontFamily: "Winky Sans", fontWeight: "100" }}
              >
                Contact
              </a>
            </li>
            <li>
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
            </li>
          </div>{" "}
        </div>
      </nav>

      <div
        className="landing-box"
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          height: "40vh",
          marginLeft: "20px",
          marginBottom: "20px",
        }}
      >
        <h2 className="landing-header">
          JON <br />
          HILL <br />
          CULINARY <br />
          BLOG
        </h2>
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
      <main className="main">
        <div className="double-container">
          <div className="posts_container">
            <h2
              className="title"
              style={{
                fontWeight: "200",
                fontFamily: "Winky Sans",
                marginTop: "20px",
              }}
            >
              Latest Posts
            </h2>
            {posts?.map((post) => (
              <div
                key={post.post_id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <Link to={`/post/${post.slug}`} className="post">
                  <h2 id="post-title" className="post_title">
                    {post.title}
                  </h2>
                  {post.fileUrl ? (
                    <img
                      src={post.fileUrl}
                      alt={post.title}
                      style={{
                        maxHeight: "50vh",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    ""
                  )}
                  <p
                    style={{
                      textDecoration: "none",
                      color: "black",
                      padding: "10px 0px",
                    }}
                  >
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
          <div className="search_container">
            <h2 style={{ paddingBottom: "20px", fontWeight: "100" }}>
              Explore the blog
            </h2>
            <div
              className="search"
              style={{ paddingBottom: "20px", display: "flex", gap: "10px" }}
            >
              <input
                type="search"
                placeholder="Search posts..."
                className="search_bar"
                style={{
                  padding: "8px",
                  fontSize: "14px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  width: "180px",
                  outline: "none",
                }}
              />
              <button
                className="search_button"
                style={{
                  padding: "8px",
                  fontSize: "14px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#4a90e2",
                  color: "white",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                Search
              </button>
            </div>{" "}
            <img
              src={chefImage}
              alt="picture of chef jon"
              style={{ width: "15vw", height: "auto", borderRadius: "10px" }}
            />
            {posts?.map((post) => (
              <div
                key={post.post_id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <Link to={`/post/${post.slug}`} className="post">
                  <p>{post.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            width: "100%",
          }}
        >
          Copyright © 2024 Jon Hill. All Rights Reserved.
        </p>
      </main>
    </div>
  );
};
export default Home;
