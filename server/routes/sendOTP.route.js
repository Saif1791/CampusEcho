import express from "express";
import otpVerificationController from "../controllers/otpVerification.controller.js";

const router = express.Router();

router.post("/sendOTP", otpVerificationController);

export default router;
