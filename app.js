const express = require("express");
const app = express();
const cors = require(cors())
const routes = require("./src/userRouter/userRouter");
app.use(express.json());
app.use("/form", routes);
module.exports = app;
