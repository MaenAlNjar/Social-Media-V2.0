import express from "express";
import multer from "multer";
import { createPost } from "../controllers/postController.js";
import verifyToken from "../middleware/authMiddleware.js"; 

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/posts",verifyToken ,  upload.single("image"), createPost);

export default router;
