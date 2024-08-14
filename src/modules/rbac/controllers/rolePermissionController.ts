import RolePermissionService from "../services/rolePermissionService";
import catchAsyncErrors from "../../../utils/catchAsyncErrors";

class RolePermissionController {
  static assignPermissionToRole = catchAsyncErrors(async (req, res, next) => {
    const { roleId, permissionId } = req.body;
    await RolePermissionService.assignPermissionToRole(roleId, permissionId);
    res
      .status(201)
      .json({ success: true, message: "Permission assigned to role" });
  });

  static getPermissionsByRole = catchAsyncErrors(async (req, res, next) => {
    const permissions = await RolePermissionService.getPermissionsByRole(
      req.params.roleId
    );
    res.status(200).json(permissions);
  });

  static removePermissionFromRole = catchAsyncErrors(async (req, res, next) => {
    const { roleId, permissionId } = req.body;
    await RolePermissionService.removePermissionFromRole(roleId, permissionId);
    res
      .status(200)
      .json({ success: true, message: "Permission removed from role" });
  });
}

export default RolePermissionController;
