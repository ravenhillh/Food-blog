import chefImage from "/assets/IMG_5746.jpg";

const Bio = () => {
  return (
    <div id="bio-container" style={{ paddingBottom: "5rem" }}>
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
      <h2
        style={{
          display: "flex",
          padding: "10px",
          paddingTop: "3rem",
          fontWeight: "225",
        }}
        className="title"
      >
        Meet the chef...
      </h2>
      <div className="bio-details-container">
        <img
          src={chefImage}
          style={{
            width: "250px",
            borderRadius: "10px",
            boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
          }}
        />
        <p
          className="bio-text"
          style={{ padding: "50px", lineHeight: "2", fontSize: "18px" }}
        >
          Born and raised in Reading, PA. I&apos;ve worked in kitchens since
          1973, my first job was cooking at a summer camp during high school. My
          journey as a chef has taken me from small town Pennsylvania to
          Philadelphia, then to rainy Seattle and eventually to the idyllic
          islands of Hawaii. I have recently worked at such notable Seattle
          restaurants as Cinque Terra, Cedarbrook Lodge and Harry&apos;s Fine
          Foods. I am a dedicated West Seattleite, living in the Delridge
          neighborhood since 1999. In my free time I love to cook, write, ride
          bikes, and spend time with my wife and four+ children.
        </p>
      </div>
    </div>
  );
};
export default Bio;
