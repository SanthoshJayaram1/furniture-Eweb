import { Schema, model, Document } from "mongoose";
import { ICategory } from "./category";

export interface ISubcategory extends Document {
  name: string;
}

export const subcategorySchema = new Schema<ISubcategory>({
  name: { type: String, required: true },
});

const Subcategory = model<ISubcategory>("Subcategory", subcategorySchema);
export default Subcategory;
