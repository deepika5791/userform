// const express = require("express");
// const app = express();
// const cors = require("cors");
// const routes = require("./src/userRouter/userRouter");
// app.use(
//   cors({
//     origin: ["http://localhost:5173", "https://form-tawny-seven.vercel.app"],
//   })
// );

// app.use(express.json());
// app.use("/form", routes);
// module.exports = app;
// backend/index.js
const express = require("express");
const cors = require("cors");
const routes = require("./src/userRouter/userRouter");

const app = express();

// List of allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://form-tawny-seven.vercel.app",
];

// CORS middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow non-browser requests like Postman
      if (allowedOrigins.includes(origin)) {
        callback(null, true); // allow this origin
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);
app.options("*", cors());

// JSON parser
app.use(express.json());

// Routes
app.use("/form", routes);

// Export app
module.exports = app;
