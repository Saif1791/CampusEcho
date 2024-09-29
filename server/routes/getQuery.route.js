import express from "express";
import verify from "../utils/verify.js";
import {
  getQueryController,
  getQueriesController,
} from "../controllers/getQuery.controller.js";

const router = express.Router();

router.get("/getQuery/:id", verify, getQueryController);
router.get("/getQueries", verify, getQueriesController);

export default router;
