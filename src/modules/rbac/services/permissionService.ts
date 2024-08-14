import { Permission } from "../models/permission"

class PermissionService {
  static async createPermission(permissionData) {
    return await Permission.create(permissionData);
  }

  static async getPermissionById(id) {
    return await Permission.findById(id);
  }

  static async getAllPermissions() {
    return await Permission.find();
  }

  static async updatePermission(id, updateData) {
    return await Permission.findByIdAndUpdate(id, updateData, { new: true });
  }

  static async deletePermission(id) {
    return await Permission.findByIdAndDelete(id);
  }
}

export default PermissionService;
