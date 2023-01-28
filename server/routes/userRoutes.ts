import express from "express";

import {
  register,
  loginUser,
  getUser,
} from "../controllers/Users/userController";
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(loginUser);

router.route("/me").get(protect,getUser);

router.route("/githubLogin").post()

export default router;
