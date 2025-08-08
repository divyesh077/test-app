const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
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
  res.status(200).json({
    status: "OK",
    message: "Get posts successfully!!!",
    data: posts,
  });
});

module.exports = { postRouter: router };
