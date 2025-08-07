const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "OK",
    message: "Server is running!!!",
  });
});
module.exports = { app };
