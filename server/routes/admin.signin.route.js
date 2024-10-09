import express from "express";
import adminSignInController from "../controllers/admin.signin.controller.js";

const router = express.Router();

router.post("/adminSignIn", adminSignInController);

export default router;
