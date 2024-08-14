import express from "express";
import UserRoleController from "../controllers/userRoleController.js";

const router = express.Router();

router.post("/", UserRoleController.assignRoleToUser);
router.get("/:userId", UserRoleController.getRolesByUser);
router.delete("/", UserRoleController.removeRoleFromUser);

export default router;
