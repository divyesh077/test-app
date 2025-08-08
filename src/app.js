const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(helmet());
app.use(cors());

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/v1/health", (req, res, next) => {
  res.status(200).json({
    status: "OK",
    message: "Server is running !!!",
  });
});

module.exports = { app };
