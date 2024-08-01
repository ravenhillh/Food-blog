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
      <h1>My Story</h1>
      <p>Born and raised in Reading, PA. Eventually made my way out to Seattle, WA, in 1988. </p>
    </div>
  )
}

export default Bio;
