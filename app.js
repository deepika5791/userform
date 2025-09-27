// const express = require("express");
const cors = require("cors");
const routes = require("./src/userRouter/userRouter");

const app = express();

// CORS setup
const corsOptions = {
  origin: ["http://localhost:5173", "https://form-jade-nu.vercel.app"], // exact origins
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
};

// Use CORS globally
app.use(cors(corsOptions));
app.use(express.json());

// Handle preflight OPTIONS requests globally
app.options("*", cors(corsOptions));

// Mount your routes
app.use("/form", routes);

module.exports = app;
