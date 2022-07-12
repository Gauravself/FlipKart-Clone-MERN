const express = require("express");
const cors = require("cors");
const signup = require("./routes/signup.route");
//Create Express app here
const app = express();
app.use(cors());
app.use(express.json());

//Place Middleware here
app.use("/", signup);

module.exports = app;
