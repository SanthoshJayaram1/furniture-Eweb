import { Schema, model, Document } from "mongoose";

export interface IWebsite extends Document {
  name: string;
  url: string;
  websiteCode:string;
}

const websiteSchema = new Schema<IWebsite>({
  websiteCode: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
});

const Website = model<IWebsite>("Website", websiteSchema);
export default Website;
