import express from "express";

import loginUser from "../controllers/authController";

const authRouter = express.Router();

//@desc Login a user
//@route POST /api/auth/login
authRouter.post("/login", loginUser);

export default authRouter;
