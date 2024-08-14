import mongoose, { Document } from "mongoose";
import { IRole, RoleCodes } from "./role";
import bcrypt from "bcryptjs"

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  rf_token?: string | null;
  role: RoleCodes;
}

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    select: false,
  },
  rf_token: {
    type: String,
    select: false,
  },
  role: {
    type: String,
    enum: Object.values(RoleCodes),
    default: RoleCodes.COMPANY_USER, 
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
