export const fetchAllPosts = (setLoading, setPosts) => {
  fetch("/posts")
      .then((res) => res.json())
      .then((data) => {
          setLoading(false);
          setPosts(data.posts);
      })
      .catch((err) => console.error(err));
};

export const fetchPostContent = (slug, setLoading, setPost) => {
  fetch("http://localhost:4000/post/details", {
      method: "POST",
      body: JSON.stringify({ slug: slug }),
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },
  })
      .then((res) => res.json(res))
      .then((data) => {
          setLoading(false);
          setPost(data.post[0]);
          console.log(data)
      })
      .catch((err) => console.error(err));
};

export const postReaction = (slug, type) => {
    fetch("http://localhost:4000/post/react", {
        method: "POST",
        body: JSON.stringify({ slug, type, u_id: localStorage.getItem("u_id") }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json(res))
        .then((data) => alert(data.message))
        .catch((err) => console.error(err));
};

export const addNewPost = (u_id, title, content, date, navigate) => {
    fetch("http://localhost:4000/post/add", {
        method: "POST",
        body: JSON.stringify({ u_id, title, content, date }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json(res))
        .then((data) => {
            alert(data.message);
            navigate("/");
        })
        .catch((err) => {
            console.error(err);
            alert("Encountered an error ❌");
        });
};