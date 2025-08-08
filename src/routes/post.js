const express = require("express");
const { getPosts, getPostById } = require("../controllers/post.controller");

const router = express.Router();

router.get("/", getPosts);
router.get("/:postId", getPostById);

module.exports = { postRouter: router };
