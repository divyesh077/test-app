const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "OK",
    message: "Server is running!!!",
  });
});
module.exports = { app };
