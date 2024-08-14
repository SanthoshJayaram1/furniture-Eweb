import { RolePermission } from "../models/rolePermission";

class RolePermissionService {
  static async assignPermissionToRole(roleId, permissionId) {
    return await RolePermission.create({
      role: roleId,
      permission: permissionId,
    });
  }

  static async getPermissionsByRole(roleId) {
    return RolePermission.find({ role: roleId }).populate("permission");
  }

  static async removePermissionFromRole(roleId, permissionId) {
    return await RolePermission.findOneAndDelete({
      role: roleId,
      permission: permissionId,
    });
  }
}

export default RolePermissionService;
