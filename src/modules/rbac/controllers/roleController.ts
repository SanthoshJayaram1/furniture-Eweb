import RoleService from "../services/roleService";
import catchAsyncErrors from "../../../utils/catchAsyncErrors";
import ErrorHandler from "../../../utils/errorHandler";

class RoleController {
  static createRole = catchAsyncErrors(async (req, res, next) => {
    const role = await RoleService.createRole(req.body);
    res.status(201).json(role);
  });

  static getRoleById = catchAsyncErrors(async (req, res, next) => {
    const role = await RoleService.getRoleById(req.params.id);
    if (!role) return next(new ErrorHandler("Role not found", 404));
    res.status(200).json(role);
  });

  static getAllRoles = catchAsyncErrors(async (req, res) => {
    const roles = await RoleService.getAllRoles();
    res.status(200).json(roles);
  });

  static updateRole = catchAsyncErrors(async (req, res, next) => {
    const role = await RoleService.updateRole(req.params.id, req.body);
    if (!role) return next(new ErrorHandler("Role not found", 404));
    res.status(200).json(role);
  });

  static deleteRole = catchAsyncErrors(async (req, res, next) => {
    const role = await RoleService.deleteRole(req.params.id);
    if (!role) return next(new ErrorHandler("Role not found", 404));
    res.status(204).json();
  });
}

export default RoleController;
