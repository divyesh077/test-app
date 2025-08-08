const express = require("express");

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
router.get("/", (req, res, next) => {
  res.status(200).json({
    status: "OK",
    message: "Get posts successfully!!!",
    data: posts,
  });
});

router.get("/:postId", (req, res, next) => {
  const { postId } = req.params;
  const post = posts.filter((post) => post._id === postId);
  res.status(200).json({
    status: "OK",
    message: `Get post with postId ${postId}`,
    data: post,
  });
});

module.exports = { postRouter: router };
