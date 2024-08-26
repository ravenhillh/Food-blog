import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Bio = () => {
//   const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{background: 'yellow', padding: '20px'}}>
        <h1 style={{ display: "flex", alignItems: "center", padding: '50px' }}>My Story</h1>
        <p>Born and raised in Reading, PA. I have worked in the kitchen since 1973, working in a camp kitchen as a teenager. My journey as a chef
            has taken me from small town Pennsylvania to Philadelphia, to Seattle and eventually to the islands of Hawaii. I have recently worked
            at such notable seattle restaurants as Cinque Terra, Cedarbrook Lodge and Harrys Fine Foods. I am a dedicated West Seattleite, living in
            the Delridge neighborhood since 1999. In my free time I love to cook, write, ride bikes, and spend time with my wife and four children.
        </p>
    </div>
  )
}

export default Bio;
