import User, { IUser } from "../modules/rbac/models/user";
import RolePermissionService from "../modules/rbac/services/rolePermissionService";
import ErrorHandler from "../utils/errorHandler";
import { Request, Response, NextFunction } from "express";

interface CustomRequest extends Request {
  user?: IUser;
}

export const authorizePermissions = (...requiredPermissions: string[]) => {
  return async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const userRole = req?.user?.role;

      const rolePermissions = await RolePermissionService.getPermissionsByRole(
        userRole
      );

      const userPermissions = rolePermissions.map(
        (rp) => rp.permission[0].permissionCode
      );

      const hasPermissions = requiredPermissions.every((permission) =>
        userPermissions.includes(permission)
      );

      if (!hasPermissions) {
        return next(
          new ErrorHandler(
            `Permission(s) (${requiredPermissions.join(
              ", "
            )}) is/are not allowed for role (${userRole}) to access this resource`,
            403
          )
        );
      }

      next();
    } catch (error) {
      return next(
        new ErrorHandler(`Error checking permissions: ${error.message}`, 500)
      );
    }
  };
};
