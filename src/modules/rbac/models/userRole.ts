import mongoose from "mongoose";
import { Schema, Types } from "mongoose";

interface IUserRole {
  user: Types.ObjectId;
  role: Types.ObjectId;
}

const userRoleSchema = new Schema<IUserRole>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
  },
  {
    timestamps: true,
  }
);

export const UserRole = mongoose.model<IUserRole>("UserRole", userRoleSchema);
