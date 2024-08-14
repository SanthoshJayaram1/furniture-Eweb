import express from "express";
import RolePermissionController from "../controllers/rolePermissionController.js";

const router = express.Router();

router.post("/", RolePermissionController.assignPermissionToRole);
router.get("/:roleId", RolePermissionController.getPermissionsByRole);
router.delete("/", RolePermissionController.removePermissionFromRole);

export default router;
