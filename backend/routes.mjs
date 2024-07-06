import express from "express";
import { uploadPhoto, getAllPhotos } from "./controller.mjs";

const router = express.Router();

router.post("/upload", uploadPhoto);
router.get("/photos", getAllPhotos);

export default router;
