const express = require("express");
const { getPosts, getPostById } = require("../controllers/post.controller");

const router = express.Router();
const posts = [
  {
    _id: "1",
    title: "Hello World!!",
  },
  {
    _id: "2",
    title: "Welcome to tech!!!",
  },
];
router.get("/", getPosts);
router.get("/:postId", getPostById);

module.exports = { postRouter: router };
