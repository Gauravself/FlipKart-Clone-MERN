const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../model/user.model");

const userSignUp = catchAsyncErrors(async (req, res, next) => {
  const exists = await User.findOne({ userName: req.body.userName });
  if (exists) {
    return res.status(401).json({
      success: false,
      message: "User already exists",
    });
  }

  const user = req.body;
  const newUser = new User(user);
  await newUser.save();
  res.status(200).json({
    success: true,
    newUser,
  });
});

module.exports = userSignUp;
