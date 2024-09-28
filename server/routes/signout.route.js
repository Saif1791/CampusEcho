import express from "express";
import userSignOutController from "../controllers/userSignOut.controller.js";

const router = express.Router();

router.post("/signout", userSignOutController);

export default router;
