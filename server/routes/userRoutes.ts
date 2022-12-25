import express from "express";

import { register, loginUser } from "../controllers/Users/userController";

const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(loginUser);

export default router;
