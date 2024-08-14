import express from "express";
import RoleController from "../controllers/roleController";

const router = express.Router();

router.post("/", RoleController.createRole);
router.get("/:id", RoleController.getRoleById);
router.get("/", RoleController.getAllRoles);
router.put("/:id", RoleController.updateRole);
router.delete("/:id", RoleController.deleteRole);

export default router;
