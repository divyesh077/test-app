//**Node Modules */
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

//**Custom Modules */
const v1Router = require("./routes/index");

//**App init */
const app = express();

//**Security Middlewares */
app.use(helmet());
app.use(cors());

//**Logger Middlewares */
app.use(morgan("dev"));

//**Parser Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//**End poins for version 1 */
app.use("/api/v1", v1Router);

module.exports = { app };
