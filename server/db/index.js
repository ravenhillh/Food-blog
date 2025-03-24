const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const atlas_uri = process.env.ATLAS_URI;
mongoose
  .connect(atlas_uri)
  .then(() => console.log('db connected successfully'))
  .catch((err) => console.log(err))

const BlogSchema = new mongoose.Schema({
  u_id: String,
  post_id: String,
  title: String,
  slug: String,
  content: String,
  published_date: String,
  likes: [{user_id: String}, {u_id: String}],
  dislikes: [{user_id: String}, {u_id: String}],
  fileUrl: String, // S3 File URL
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = {
  Blog
};
