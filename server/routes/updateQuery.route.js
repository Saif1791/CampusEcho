import express from "express";
import assignFacultyController from "../controllers/assignQuery.controller.js";
import verifyAdmin from "../utils/verifyAdmin.js";

const router = express.Router();

router.post("/assign/:id", verifyAdmin, assignFacultyController);

export default router;
