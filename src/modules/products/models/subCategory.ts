import { Schema, model, Document } from "mongoose";
import { ICategory } from "./category";

export interface ISubcategory extends Document {
  name: string;
  subCategoryCode: string;
}

export const subcategorySchema = new Schema<ISubcategory>({
  name: { type: String, required: true },
  subCategoryCode: { type: String, required: true, unique: true },
});

const Subcategory = model<ISubcategory>("Subcategory", subcategorySchema);
export default Subcategory;
