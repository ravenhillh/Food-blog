const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const AWS = require("aws-sdk");
const fs = require("fs");

const app = express();

const s3Client = new AWS.S3({
  accessKeyId: "AKIAVRUVTGIZNBWL3Q6O",
  secretAccessKey: "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",
  region: "us-east-2",
});

require("dotenv").config();

const storage = multer.memoryStorage()
const upload = multer({ storage: storage });

const { Blog } = require("./db/index");
const PORT = 4000;
// const HOST = '0.0.0.0';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../client/blog/dist")));

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
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
});

app.post("/post/add", upload.single("file"), async (req, res) => {
  const { u_id, title, content, date } = req.body;
  const file = req.file;
  //   if (!title || !content) {
  //     return res
  //       .status(400)
  //       .json({ error: "Missing required fields, add a picture" });
  //   }

  function uploadFile(fileBuffer, fileName, mimetype) {
    const uploadParams = {
      Bucket: "bucket-food-blog-jh",
      Body: fileBuffer,
      Key: fileName,
      ContentType: mimetype,
    };

    return s3Client.send(new PutObjectCommand(uploadParams));
  }
  const response = await uploadFile(file.buffer, title, file.mimetype);
//   const fileContent = fs.readFileSync(req.file.path);
//   const fileExtension = req.file.originalname.split(".").pop();
//   const s3FileName = `${Date.now()}-${req.file.originalname}`;

//   const params = {
//     Bucket: "bucket-food-blog-jh",
//     Key: s3FileName,
//     Body: fileContent,
//     ContentType: req.file.mimetype,
//     ACL: "public-read", // Allows public access to the file
//   };
//   const s3UploadResponse = await s3.upload(params).promise();

  // Remove file from local storage after upload
//   fs.unlinkSync(req.file.path);

  const postObject = {
    u_id,
    post_id: generateID(),
    title,
    slug: createSlug(title, generateID()),
    content,
    published_date: date,
    likes: [],
    dislikes: [],
    fileUrl: response.Location, // S3 URL
    // fileType: req.file.mimetype,
    // fileSize: req.file.size,
  };
  Blog.create(postObject)
    .then(() => {
      res.json({ message: "Post added successfully!✅" });
    })
    .catch((err) => {
      console.log(err);

      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ error: "File size exceeds 5MB limit." });
      }
      res.sendStatus(404);
    });
});

app.post("/post/details", (req, res) => {
  const { slug } = req.body;

  Blog.find({
    slug: slug,
  })
    .then((post) => {
      console.log(post);
      res.json({ post });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
});

app.post("/post/react", async (req, res) => {
  const { slug, type, u_id } = req.body;

  if (type === "like") {
    Blog.findOneAndUpdate(
      { slug },
      {
        $push: { likes: { u_id } },
      }
    )
      .then(() => {
        res.json({ message: "You've just liked a post" });
      })
      .catch((err) => console.log(err));
  } else {
    Blog.findOneAndUpdate(
      { slug },
      {
        $push: { dislikes: { u_id } },
      }
    )
      .then(() => {
        res.json({ message: "You've just disliked a post" });
      })
      .catch((err) => console.log(err));
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/blog/dist/index.html"));
});

app.listen(process.env.PORT || PORT, "0.0.0.0", () => {
  console.log(`Server listening on ${PORT}`);
});
