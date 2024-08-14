import mongoose from "mongoose";
import { Schema, Types } from "mongoose";

interface IRolePermission {
  role: Types.ObjectId;
  permission: Types.ObjectId;
}

const rolePermissionSchema = new Schema<IRolePermission>(
  {
    role: {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
    permission: {
      type: Schema.Types.ObjectId,
      ref: "Permission",
    },
  },
  {
    timestamps: true,
  }
);

export const RolePermission = mongoose.model<IRolePermission>(
  "RolePermission",
  rolePermissionSchema
);
