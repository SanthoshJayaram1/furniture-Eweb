import { Request } from "express";
import User, { IUser } from "../modules/rbac/models/user";
import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncErrors from "../utils/catchAsyncErrors";

interface CustomRequest extends Request {
  user?: IUser;
}

export const isAuthenticated = catchAsyncErrors(
  async (req: CustomRequest, res, next) => {
    const tokenHeader = req.header("Authorization");
    if (!tokenHeader) return next(new ErrorHandler("Invalid token", 400));

    const token = tokenHeader.split(" ")[1];

    const decoded: any = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
    if (!decoded.id) return next(new ErrorHandler("Invalid token", 400));

    const user = await User.findOne({ _id: decoded.id });
    if (!user) return next(new ErrorHandler("User not found", 404));

    req.user = user.toObject();
    next();
  }
);
