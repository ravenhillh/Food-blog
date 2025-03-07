import chefImage from "/assets/IMG_5746.jpg";

const Bio = () => {
  return (
    <div id="bio-container" style={{paddingBottom: "5rem"}}>
      <h2
        style={{ display: "flex", padding: "10px", paddingTop: "3rem", fontWeight: "225" }}
        className="title"
      >
        Meet the chef...
      </h2>
      <div className="bio-details-container">
        <img src={chefImage} style={{ width: "250px", borderRadius: "10px",
              boxShadow: "0 5px 10px rgba(0,0,0,0.1)"}} />
        <p
          className="bio-text"
          style={{ padding: "50px", lineHeight: "2", fontSize: "18px" }}
        >
          Born and raised in Reading, PA. I&apos;ve worked in kitchens since
          1973, my first job was cooking at a summer camp during high school. My journey as a chef
          has taken me from small town Pennsylvania to Philadelphia, then to rainy Seattle
          and eventually to the idyllic islands of Hawaii. I have recently worked at
          such notable Seattle restaurants as Cinque Terra, Cedarbrook Lodge and
          Harry&apos;s Fine Foods. I am a dedicated West Seattleite, living in
          the Delridge neighborhood since 1999. In my free time I love to cook,
          write, ride bikes, and spend time with my wife and four+ children.
        </p>
      </div>
    </div>
  );
};
export default Bio;
