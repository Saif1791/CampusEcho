import express from "express";
import facultySignInController from "../controllers/faculty.signin.controller.js";

const router = express.Router();

router.post("/facultysignin", facultySignInController);

export default router;
