import express from "express";
import permissionRoutes from "./permissionRoutes";
import roleRoutes from "./roleRoutes";
import userRoleRoutes from "./userRoleRoutes";
import rolePermissionRoutes from "./rolePermissionRoutes";

const router = express.Router();

router.use("/permission", permissionRoutes);
router.use("/role", roleRoutes);
router.use("/user-role", userRoleRoutes);
router.use("/role-permissions", rolePermissionRoutes);

export default router;
