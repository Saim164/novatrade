const userModel = require("./models/userModel.js");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("./secretToken.js");

const User = userModel;

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


module.exports.Logout = (req, res) => {
  res.clearCookie("token", { sameSite: "lax" });
  res.status(200).json({ message: "Logged out successfully", success: true });
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       httpOnly: false,
       sameSite: "lax",
       maxAge: 24 * 60 * 60 * 1000,
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}