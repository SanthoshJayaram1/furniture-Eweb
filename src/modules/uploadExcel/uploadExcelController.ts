import { Request, Response } from "express";
import xlsx from "xlsx";
import uploadExcelService from "../uploadExcel/uploadExcelService";

const uploadExcelController = async (req: Request, res: Response) => {
  try {
    const filePath = req.file?.path;

    if (!filePath) {
      return res.status(400).json({ message: "File not provided" });
    }

    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);

    await uploadExcelService.processData(data);

    res.status(200).json({
      message: "Data successfully uploaded and saved to the database",
    });
  } catch (error) {
    console.error("Error processing file:", error);
    res.status(500).json({ error: (error as Error).message });
  }
};

export default uploadExcelController;
