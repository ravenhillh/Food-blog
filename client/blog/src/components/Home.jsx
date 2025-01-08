import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPosts } from "../utils/util";
import Bio from './Bio'
import Photos from './Photos'


const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = useCallback(() => {
        fetchAllPosts(setLoading, setPosts);
    }, []);

    useEffect(() => {
        if (localStorage.getItem("loggedIn")) {
            setLoggedIn(true);
        }
        fetchPosts();
    }, [fetchPosts]);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <div style={{ backgroundColor: 'black', height: '30px', width: '100%' }}></div>
            <div className="landing-wrapper">
                <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className='navbar'>
                    <Link to='/' className='logo'>
                        <h2>Jon Hill</h2>
                    </Link>
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <Link to='/bio' className="logo"><h2>Bio</h2></Link>
                        <Link to='/photos' className="logo"><h2>Gallery</h2></Link>
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
                    </div>
                </nav>
                <div style={{ textAlign: 'center', marginTop: '60px', fontFamily: 'Playfair Display, serif' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Jon Hill Culinary Experience</h2>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '300', color: "antiquewhite" }}>Explore the Recipes and Idiosyncratic Musings of Chef Jonathan Hill</h3>
                </div>
            </div>
            <main className='main'>
                < Bio/>
                < Photos/>
                <h2 className='heading'>Latest Posts</h2>
                <div className='posts_container'>
                    {posts?.map((post) => (
                        <Link to={`/post/${post.slug}`} className='post' key={post.post_id}>
                            <h2 className='post_title'>{post.title}</h2>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
};
export default Home;