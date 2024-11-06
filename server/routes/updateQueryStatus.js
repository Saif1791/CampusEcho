import express from "express";
import updateQueryStatusController from "../controllers/updateQueryStatusController.js";

const router = express.Router();

router.post("/updateQueryStatus/:id", updateQueryStatusController);

export default router;
