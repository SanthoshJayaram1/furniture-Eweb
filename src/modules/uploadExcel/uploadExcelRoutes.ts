import express from "express";
import { upload } from "../../config/multer"; // Import multer configuration
import uploadExcelController from "../uploadExcel/uploadExcelController";

const router = express.Router();

router.post("/upload-excel", upload.single("file"), uploadExcelController);

export default router;
