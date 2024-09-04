

const Bio = () => {
//   const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div id="bio-container">
        <h2 style={{ display: "flex", padding:'10px' }} className="bio-header">Meet the chef</h2>
        <div className="bio-details-container">
          <img
          src="https://scontent-hou1-1.xx.fbcdn.net/v/t31.18172-8/10633228_10152662266847086_5510959160989902783_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f798df&_nc_ohc=Mpm8KrykFqsQ7kNvgEhX3UP&_nc_ht=scontent-hou1-1.xx&oh=00_AYC8iPhdjNR52vFXfA5Zy4S6_rushRNrn_MJhV4LwQBLhQ&oe=66FE9C35"
          style={{ width:"250px"}}
          />
          <p className="bio-text" style={{padding: '10px', lineHeight: '1.8'}}>Born and raised in Reading, PA. I have worked in kitchens since 1973, my first job was cooking at a summer camp. My journey as a chef
              has taken me from small town Pennsylvania to Philadelphia, to Seattle and eventually to the islands of Hawaii. I have recently worked
              at such notable Seattle restaurants as Cinque Terra, Cedarbrook Lodge and Harrys Fine Foods. I am a dedicated West Seattleite, living in
              the Delridge neighborhood since 1999. In my free time I love to cook, write, ride bikes, and spend time with my wife and four children.
          </p>
        </div>
    </div>
  )
}

export default Bio;
