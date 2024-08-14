import express from "express";
import PermissionController from "../controllers/permissionController.js";

const router = express.Router();

router.post("/", PermissionController.createPermission);
router.get("/:id", PermissionController.getPermissionById);
router.get("/", PermissionController.getAllPermissions);
router.put("/:id", PermissionController.updatePermission);
router.delete("/:id", PermissionController.deletePermission);

export default router;
