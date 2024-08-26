import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Bio = () => {
//   const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
        <div className="bio-pic-container">
          <img src="./IMG_5746.jpg" alt="Bio picture"/>
        </div>
        <h1 style={{ display: "flex", alignItems: "center", padding: '50px' }}>My Story</h1>
        <p>Born and raised in Reading, PA. Eventually made my way out to Seattle, WA, in 1988. Worked at numerous restaurants across the city, including Tulio Ristorante, Cinque Terra, The Edgewater, Copperleaf, and Harrys Fine Foods, just to name a few. Living in the Delridge neighborhood of West Seattle, with wife Stacy Councilman, raised four+ children and spent free time writing, cooking and cycling.</p>
    </div>
  )
}

export default Bio;
