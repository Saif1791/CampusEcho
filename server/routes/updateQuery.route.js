import express from "express";

const router = express.Router();

router.post("/assign/:id", assignFacultyController);

export default router;
