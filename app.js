const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./src/userRouter/userRouter");
app.use(
  cors({
    origin: ["http://localhost:5173"],
    vercel: "https://form-jade-nu.vercel.app/",
  })
);
app.use(express.json());
app.use("/form", routes);
module.exports = app;
