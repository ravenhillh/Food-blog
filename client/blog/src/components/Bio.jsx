import chefImage from '/assets/IMG_5746.jpg'

const Bio = () => {

  return (
    <div id="bio-container">
        <h2 style={{ display: "flex", padding:'10px' }} className="bio-header">Meet the chef...</h2>
        <div className="bio-details-container">
          <img
          src={chefImage}
          style={{ width:"250px"}}
          />
          <p className="bio-text" style={{padding: '10px', lineHeight: '1.8', fontSize: '18px'}}>Born and raised in Reading, PA. I have worked in kitchens since 1973, my first job was cooking at a summer camp. My journey as a chef
              has taken me from small town Pennsylvania to Philadelphia, to Seattle and eventually to the islands of Hawaii. I have recently worked
              at such notable Seattle restaurants as Cinque Terra, Cedarbrook Lodge and Harrys Fine Foods. I am a dedicated West Seattleite, living in
              the Delridge neighborhood since 1999. In my free time I love to cook, write, ride bikes, and spend time with my wife and four children.
          </p>
        </div>
    </div>
  )
}
export default Bio;
