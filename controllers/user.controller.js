const Post = require("../models/post.model");
const mongoose = require("mongoose");

const addPost = (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    user_id: req.body.user_id,
    content: req.body.content,
    image: req.body.image,
    comments: req.body.comments,
    tags: req.body.tags
  });
  
  newPost.save()
    .then(post => {
      res.send({ message: "Post was added successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

module.exports = {
  addPost
}