const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 20,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    min: 7,
    max: 10,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please Enter Valid Email"],
  },
  phone: {
    type: Number,
    required: true,
    maxLength: 10,
    minLength: 10,
  },
});

module.exports = mongoose.model("User", userSchema);
