const asyncHandler = require("express-async-handler");

const getPosts = asyncHandler((req, res, next) => {
  res.status(200).json({
    status: "OK",
    message: "Get posts successfully!!!",
    data: posts,
  });
});

const getPostById = asyncHandler((req, res, next) => {
  const { postId } = req.params;
  const post = posts.filter((post) => post._id === postId);
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
