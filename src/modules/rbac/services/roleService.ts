import { Role } from "../models/role";

class RoleService {
  static async createRole(roleData) {
    return await Role.create(roleData);
  }

  static async getRoleById(id) {
    return await Role.findById(id);
  }

  static async getAllRoles() {
    return await Role.find();
  }

  static async updateRole(id, updateData) {
    return await Role.findByIdAndUpdate(id, updateData, { new: true });
  }

  static async deleteRole(id) {
    return await Role.findByIdAndDelete(id);
  }
}

export default RoleService;
