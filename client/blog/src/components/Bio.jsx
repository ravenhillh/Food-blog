const Bio = () => {
  //   const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <p style={{ textAlign: "center" }}>Get to know</p>
      <h1 style={{ fontSize: "3rem", textAlign: "center" }}>the chef</h1>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            height: "400px",
            width: "400px",
            margin: "auto 0",
          }}
        >
          <img
            src="./assets/IMG_5746.jpg"
            alt="profile picture"
            style={{ borderRadius: "2rem" }}
          />
        </div>
        <div style={{ justifyContent: "center", flexDirection: "column" }}>
          <div style={{ gap: "2rem", marginBottom: "2rem", marginTop: "2rem" }}>
            <div
              style={{
                padding: "1.5rem",
                flex: "1",
                background: "white",
                borderRadius: "2rem",
                border: "rgb(53, 53, 53) .1rem solid",
                borderColor: "rgb(163, 163, 163",
                textAlign: "center",
              }}
            >
              <img
                src="./assets/experience.png"
                alt="experience icon"
                style={{ cursor: "pointer", height: "2rem" }}
              />
              <h3>Experience</h3>
              <p>
                1+ <br />
                Fullstack Development
              </p>
            </div>
            <div
              style={{
                padding: "1.5rem",
                flex: "1",
                background: "white",
                borderRadius: "2rem",
                border: "rgb(53, 53, 53) .1rem solid",
                borderColor: "rgb(163, 163, 163",
                textAlign: "center",
              }}
            >
              <img
                src="./assets/education.png"
                alt="education icon"
                style={{ cursor: "pointer", height: "2rem" }}
              />
              <h3>Education</h3>
              <p>
                B.A. Secondary Education
                <br />
                Cert. IBC Fundamentals of Javascript
              </p>
            </div>
          </div>
          <div style={{ textAlign: "justify" }}>
            <p>
              Born and raised in Reading, PA. I have worked in kitchens since
              1973, my first job was cooking at a summer camp. My journey as a
              chef has taken me from small town Pennsylvania to Philadelphia, to
              Seattle and eventually to the islands of Hawaii. I have recently
              worked at such notable Seattle restaurants as Cinque Terra,
              Cedarbrook Lodge and Harrys Fine Foods. I am a dedicated West
              Seattleite, living in the Delridge neighborhood since 1999. In my
              free time I love to cook, write, ride bikes, and spend time with
              my wife and four children.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
