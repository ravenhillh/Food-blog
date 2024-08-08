const express = require("express");
const cors = require("cors");
const path = require('path');

const app = express();

require('dotenv').config();


const { Blog } = require('./db/index')
const PORT = 4000;
// const HOST = '0.0.0.0';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client/blog/dist')));

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
    .catch((err) => {
        console.log(err)
        res.sendStatus(404)
    })
  
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
    res.json({ message: "Post added successfully!✅" });
    })
    .catch((err) => {
        console.log(err)
        res.sendStatus(404)
    })
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
});

app.post("/post/react", async (req, res) => {
    const { slug, type, u_id } = req.body;

    if (type === 'like') {
         Blog.findOneAndUpdate({ slug }, {
        "$push": { likes: { u_id } }
    }).then(() => {
        res.json({ message: "You've just liked a post" });
    }).catch(err => console.log(err))
    } else {
        Blog.findOneAndUpdate({ slug }, {
            "$push": { dislikes: { u_id } }
        }).then(() => {
            res.json({ message: "You've just disliked a post" });
        }).catch(err => console.log(err))
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/blog/dist/index.html'));
  });

app.listen(process.env.PORT || PORT, '0.0.0.0', () => {
    console.log(`Server listening on ${PORT}`);
});