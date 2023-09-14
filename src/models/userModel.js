import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username Is Required"],
    unique: true,
  },

  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Password Required"],
  },

  isVerified: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyTokenExpiry: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
