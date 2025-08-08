const express = require("express");
const { postRouter } = require("./post");

const router = express.Router();

router.get("/health", (req, res, next) => {
  res.status(200).json({
    status: "OK",
    message: "Server is running !!!",
  });
});

router.use("/posts", postRouter);

module.exports = router;
