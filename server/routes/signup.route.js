import express from "express";
import userSignUpController from "../controllers/userSignUp.controller";

const router = express.Router();

router.post("/signup", userSignUpController);

export default router;
