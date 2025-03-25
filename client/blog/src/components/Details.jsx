import { useState, useCallback, useEffect } from "react";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";

import { useParams, Link } from "react-router-dom";
import { fetchPostContent } from "../utils/util";
import { postReaction } from "../utils/util";

const Details = () => {
  const { slug } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchPostDetails = useCallback(() => {
    fetchPostContent(slug, setLoading, setPost);
  }, [slug]);

  const reactToPost = (slug, type) => {
    postReaction(slug, type);
  };

  useEffect(() => {
    fetchPostDetails();
  }, [fetchPostDetails]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <header className="details_header">
        <Link to="/" className="logo" style={{ paddingLeft: "20px" }}>
          <h2 style={{ fontSize: "4em" }}>🍳</h2>
        </Link>
        <div className="post_details">
          <h2 style={{fontFamily: "Winky Sans", fontSize: "30px", fontWeight: "200"}}>Recipes & Stories</h2>
          <div className="reactions-group">
            <button
              className="reactBtn"
              onClick={() => reactToPost(slug, "like")}
            >
              Like <AiTwotoneLike />{" "}
              <span style={{ marginLeft: 5 }}>{post.likes.length}</span>
            </button>
            <button
              className="reactBtn unlikeBtn"
              onClick={() => reactToPost(slug, "dislike")}
            >
              Dislike <AiTwotoneDislike />
              <span style={{ marginLeft: 5 }}>{post.dislikes.length}</span>
            </button>
          </div>
        </div>
      </header>
      <main className="details_body">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h1 className="details_heading">{post.title}</h1>
          {post.fileUrl ? (
            <img
              src={post.fileUrl}
              alt={post.title}
              style={{ maxHeight: "50vh", width: "auto" }}
            />
          ) : (
            ""
          )}
          <div>
            <p className="details_date">Posted on {post.published_date}</p>
          </div>
          <p>{post.content}</p>
        </div>
      </main>
    </div>
  );
};

export default Details;
