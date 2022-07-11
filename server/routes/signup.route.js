const express = require("express");
const userSignUp = require("../controller/user.controller");
const router = express.Router();

router.route("/signup").post(userSignUp);

module.exports = router;
