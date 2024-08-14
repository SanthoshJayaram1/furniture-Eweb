import express from "express";
import AuthController from "./authController"
import { isAuthenticated } from "../../middlewares/authMiddleware";

const router = express.Router();

router.route("/login").post(AuthController.login);
router.route("/refresh_token").post(AuthController.refreshToken);
router.route("/logout").get(isAuthenticated,AuthController.logout);

export default router;
