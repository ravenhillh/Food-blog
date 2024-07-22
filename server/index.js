const express = require("express");
const cors = require("cors");
const app = express();

const { Blog } = require('./db/index')
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

let posts = [
    {
        u_id: "a123",
        post_id: "1",
        title: "How to Make a Great Chili",
        slug: "cooking-a-delicious-chili",
        content:
            "The trick to a great chili is putting in all the delicious ingredients you like. This one is based off of my grandma's chili, so it has a very 50's America feel. I like to use ground beef, peppers, onions, lots of tomatoes and black beans. If you wanted you could add in a variety of different meats, vegetables and spices to suit your preferences.",
        published_date: "27-07-2023",
        likes: [{ user_id: "12345" }, { u_id: "ancsd" }],
        dislikes: [{ user_id: "12345" }, { u_id: "12345" }],
    },
];

//👇🏻 creates post slug
const createSlug = (text, id) => {
    let slug = text
        .trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, "");
    slug = slug.replace(/\s+/g, "-");
    return slug + "-" + id;
};

//👇🏻 generates a random string as ID
const generateID = () => Math.random().toString(36).substring(2, 10);

app.get("/posts", (req, res) => {
    Blog.find({})
    .then((posts) => {
        res.json({posts})
    })
    // res.json({
    //     posts,
    // });
});

app.post("/post/add", (req, res) => {
    const { u_id, title, content, date } = req.body;
    const postObject = {
        u_id,
        post_id: generateID(),
        title,
        slug: createSlug(title, generateID()),
        content,
        published_date: date,
        likes: [],
        dislikes: [],
    };
    Blog.create(postObject)
    .then(() => {
        // res.sendStatus(200)
    res.json({ message: "Post added successfully!✅" });
    })
    .catch((err) => {
        console.log(err)
        res.sendStatus(404)
    })
    // posts.unshift(postObject);
    // res.json({ message: "Post added successfully!✅" });
});

app.post("/post/details", (req, res) => {
    const { slug } = req.body;

    Blog.find({
        slug: slug
    }).then((post) => {
        console.log(post)
        res.json({ post })
    }).catch((err) => {
        console.log(err)
        res.sendStatus(404)
    });

    // const result = posts.filter((post) => post.slug === slug);
    // res.json({ post: result[0] });
});

app.post("/post/react", async (req, res) => {
    const { slug, type, u_id } = req.body;

    //👇🏻 like post functionality
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].slug === slug && type === "like") {
            //👇🏻 validates the post reaction
            const validateLike = posts[i].likes.filter(
                (likes) => likes.u_id === u_id
            );
            if (validateLike.length === 0) {
                posts[i].likes.push({ u_id });
                res.json({ message: "You've just liked a post" });
            }
        }

        //👇🏻 dislike post functionality
        if (posts[i].slug === slug && type === "dislike") {
            //👇🏻 validates the post reaction
            const validateDislike = posts[i].dislikes.filter(
                (dislikes) => dislikes.u_id === u_id
            );
            if (validateDislike.length === 0) {
                posts[i].dislikes.push({ u_id });
                // const sendNotifcation = await notify("liked", u_id);
                res.json({ message: "You've just disliked a post" });
            }
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});