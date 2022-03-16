const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  comments: {
    type: Array
  },
  tags: {
    type: Array
  }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;