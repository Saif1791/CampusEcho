import express from "express";
import userSignInController from "../controllers/userSignIn.controller.js";

const router = express.Router();

router.post("/signin", userSignInController);

export default router;
