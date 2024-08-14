import UserRoleService from "../services/userRoleService";
import catchAsyncErrors from "../../../utils/catchAsyncErrors";

class UserRoleController {
  static assignRoleToUser = catchAsyncErrors(async (req, res, next) => {
    const { userId, roleId } = req.body;
    await UserRoleService.assignRoleToUser(userId, roleId);
    res.status(201).json({ success: true, message: "Role assigned to user" });
  });

  static getRolesByUser = catchAsyncErrors(async (req, res, next) => {
    const roles = await UserRoleService.getRolesByUser(req.params.userId);
    res.status(200).json(roles);
  });

  static removeRoleFromUser = catchAsyncErrors(async (req, res, next) => {
    const { userId, roleId } = req.body;
    await UserRoleService.removeRoleFromUser(userId, roleId);
    res.status(200).json({ success: true, message: "Role removed from user" });
  });
}

export default UserRoleController;
