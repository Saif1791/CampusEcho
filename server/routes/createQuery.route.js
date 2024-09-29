import express from "express";
import verify from "../utils/verify.js";
import createQueryController from "../controllers/createQuery.controller.js";

const router = express.Router();

router.post("/createQuery", verify, createQueryController);

export default router;
