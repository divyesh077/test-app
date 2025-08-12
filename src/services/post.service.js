const { posts } = require("../data/post");

const getPosts = () => {
  return posts;
};

const getPostById = (postId) => {
  return posts.filter((post) => post._id === postId);
};

module.exports = {
  getPosts,
  getPostById,
};
