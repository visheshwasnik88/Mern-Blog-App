import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res, next) => {
  const { userName, email, password } = req.body;

  if (
    !userName ||
    !email ||
    !password ||
    userName === "" ||
    email === "" ||
    password === ""
  ) {
    // return res.status(400).json({
    //   message: "All fields are required",
    // });
    next(errorHandler(400,'All fields are required'))
  }
  const hashedPassword=bcryptjs.hashSync(password,10);
  try {
    const newUser = await User.create({
      userName,
      email,
      password:hashedPassword,
    });
    res.status(201).json('Signup successful');
  } catch (error) {
    next(error)
  }
};
