import mongoose, { Document, Schema } from "mongoose";

export enum RoleCodes {
  COMPANY_ADMIN = "admin",
  COMPANY_USER = "user",
}

export interface IRole extends Document {
  roleCode: RoleCodes;
  roleName: string;
}

const roleSchema = new Schema<IRole>(
  {
    roleCode: {
      type: String,
      unique: true,
      index: true,
      required: true,
      enum: Object.values(RoleCodes),
    },
    roleName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Role = mongoose.model<IRole>("Role", roleSchema);
