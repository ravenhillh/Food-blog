import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div>
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
      <section id="contact">
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <MdEmail />
            <p>
              <a href="mailto:jonhill1598@gmail.com">jonhill1598@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <FaFacebook />
            <p>
              <a
                href="https://www.facebook.com/jonathan.hill.9085790"
                style={{ color: "blue" }}
              >
                Facebook
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
