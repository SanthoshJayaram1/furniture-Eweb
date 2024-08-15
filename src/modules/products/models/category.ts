import { Schema, model, Document } from "mongoose";
import { IWebsite } from "./website";
import { ISubcategory, subcategorySchema } from "./subCategory";

export interface ICategory extends Document {
  name: string;
  categoryCode:string;
}

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  categoryCode: { type: String, required: true, unique: true },
});

const Category = model<ICategory>("Category", categorySchema);
export default Category;
