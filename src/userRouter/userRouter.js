const express = require("express");
const { newUser } = require("../userContoller/userController");
const router = express.Router();
router.post("/", newUser);

module.exports = router;
