const express = require("express");
const signup = require("./routes/signup.route");
//Create Express app here
const app = express();
app.use(express.json());

//Place Middleware here
app.use("/", signup);

module.exports = app;
