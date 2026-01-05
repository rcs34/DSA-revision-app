import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

import {
  createConcept,
  getConcepts,
  addConceptWithFiles,
} from "../controllers/conceptController.js";

const router = express.Router();

/**
 * Create concept (no files)
 */
router.post("/", protect, createConcept);

/**
 * Get all concepts for logged-in user
 */
router.get("/", protect, getConcepts);

/**
 * Create concept WITH file uploads
 */
router.post(
  "/with-files",
  protect,
  upload.array("files"),
  addConceptWithFiles
);

export default router;
