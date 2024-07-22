const mongoose = require('mongoose');

const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();

const { ATLAS_URI } = process.env;

mongoose
  .connect('mongodb+srv://ravenhillh:QZvJt8CIOTwXMn6f@cluster0.mewfsw8.mongodb.net/?retryWrites=true&w=majority')
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
  dislikes: [{user_id: String}, {u_id: String}]
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = {
  Blog
};
