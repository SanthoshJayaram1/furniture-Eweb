import PermissionService from "../services/permissionService";
import catchAsyncErrors from "../../../utils/catchAsyncErrors";
import ErrorHandler from "../../../utils/errorHandler";

class PermissionController {
  static createPermission = catchAsyncErrors(async (req, res, next) => {
    const permission = await PermissionService.createPermission(req.body);
    res.status(201).json(permission);
  });

  static getPermissionById = catchAsyncErrors(async (req, res, next) => {
    const permission = await PermissionService.getPermissionById(req.params.id);
    if (!permission) return next(new ErrorHandler("Permission not found", 404));
    res.status(200).json(permission);
  });

  static getAllPermissions = catchAsyncErrors(async (req, res) => {
    const permissions = await PermissionService.getAllPermissions();
    res.status(200).json(permissions);
  });

  static updatePermission = catchAsyncErrors(async (req, res, next) => {
    const permission = await PermissionService.updatePermission(
      req.params.id,
      req.body
    );
    if (!permission) return next(new ErrorHandler("Permission not found", 404));
    res.status(200).json(permission);
  });

  static deletePermission = catchAsyncErrors(async (req, res, next) => {
    const permission = await PermissionService.deletePermission(req.params.id);
    if (!permission) return next(new ErrorHandler("Permission not found", 404));
    res.status(204).json();
  });
}

export default PermissionController;
