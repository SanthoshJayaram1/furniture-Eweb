import { UserRole } from "../models/userRole";

class UserRoleService {
  static async assignRoleToUser(userId, roleId) {
    return await UserRole.create({ user: userId, role: roleId });
  }

  static async getRolesByUser(userId) {
    return await UserRole.find({ user: userId }).populate("role");
  }

  static async removeRoleFromUser(userId, roleId) {
    return await UserRole.findOneAndDelete({ user: userId, role: roleId });
  }
}

export default UserRoleService;
