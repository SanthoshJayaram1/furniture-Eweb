import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface IPermission {
  permissionCode: string;
  permissionName: string;
}

const permissionSchema = new Schema<IPermission>(
  {
    permissionCode: {
      type: String,
      unique: true,
      index: true,
      required: true,
    },
    permissionName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Permission = mongoose.model<IPermission>(
  "Permission",
  permissionSchema
);
