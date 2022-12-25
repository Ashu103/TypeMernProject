import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import User from "../../models/userModal";
import { IUser } from "../../types/User";
import generateToken from "../../utils/generateToken";
import bcrypt from "bcrypt";
//@Desc Register User
//@Route /api/users/register
//@Method POST
export const register = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password, isOptimized } = req.body;

  //Check if User exist

  const userExits = await User.findOne({ email });

  if (userExits) {
    res.status(400);
    throw new Error("User already exits");
  }

  //Hash password

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    isOptimized,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isOptimized: user.isOptimized,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user  data");
  }
});
// @Desc Login user
// @Route /api/users/login
// @Method POST

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});
