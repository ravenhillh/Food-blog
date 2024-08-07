import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Bio = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
        setLoggedIn(true);
    }
    
}, []);

  return (
    <div>
       <nav className='navbar'>
                <Link to='/' className='logo'>
                    <h2>Jon Hill Recipes</h2>
                </Link>
                <Link to='/bio' className="logo">Bio</Link>
                <div style={{ display: "flex", alignItems: "center" }}>
                    {loggedIn ? (
                        <Link to='/post/new' className='newPostBtn'>
                            New Post
                        </Link>
                    ) : (
                        <Link to='/login' className='newPostBtn'>
                            Log in
                        </Link>
                    )}
                </div>
            </nav>
        <div>
          <img src="client/blog/src/assets/IMG_5746.jpg" alt="Bio picture" className="bio-pic"/>
        </div>
        <h1 style={{ display: "flex", alignItems: "center", padding: '50px' }}>My Story</h1>
        <p>Born and raised in Reading, PA. Eventually made my way out to Seattle, WA, in 1988. Worked at numerous restaurants across the city, including Tulio Ristorante, Cinque Terra, The Edgewater, Copperleaf, and Harry's Fine Foods, just to name a few. Living in the Delridge neighborhood of West Seattle, with wife Stacy Councilman, raised four+ children and spent free time writing, cooking and cycling.</p>
    </div>
  )
}

export default Bio;
