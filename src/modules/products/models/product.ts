import { Schema, model, Document } from "mongoose";
import { ISubcategory } from "./subCategory";
import { ICategory } from "./category";
import { IWebsite } from "./website";

interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  images: string[];
  website: Schema.Types.ObjectId | IWebsite;
  category: Schema.Types.ObjectId | ICategory;
  subCategory: Schema.Types.ObjectId | ISubcategory;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: [String],
  website: {
    type: Schema.Types.ObjectId,
    ref: "Website",
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  subCategory: {
    type: Schema.Types.ObjectId,
    ref: "SubCategory",
    required: true,
  },
});

const Product = model<IProduct>("Product", productSchema);
export default Product;
