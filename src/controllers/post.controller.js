const asyncHandler = require("express-async-handler");
const postService = require("../services/post.service");

const getPosts = asyncHandler((req, res, next) => {
  const posts = postService.getPosts();
  res.status(200).json({
    status: "OK",
    message: "Get posts successfully!!!",
    data: posts,
  });
});

const getPostById = asyncHandler((req, res, next) => {
  const { postId } = req.params;
  const post = postService.getPostById(postId);
  res.status(200).json({
    status: "OK",
    message: `Get post with postId ${postId}`,
    data: post,
  });
});

module.exports = {
  getPosts,
  getPostById,
};
