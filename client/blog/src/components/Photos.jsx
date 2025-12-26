const Photos = () => {
  const foodPics = import.meta.glob("/public/foodpics/*");
  const imageUrls = Object.keys(foodPics).map((path) =>
    path.replace("/public", "")
  );

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
      <h1
        style={{ textAlign: "center", fontWeight: "300", paddingTop: "1rem" }}
        className="title"
      >
        Gallery
      </h1>
      <div
        className="image-board"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "25px",
        }}
      >
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Food image ${index + 1}`}
            style={{
              width: "calc(50% - 30px)",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
              minWidth: "300px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Photos;
