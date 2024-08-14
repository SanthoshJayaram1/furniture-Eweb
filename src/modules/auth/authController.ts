import AuthService from "./authService";
import catchAsyncErrors from "../../utils/catchAsyncErrors";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/jwtToken";
import ErrorHandler from "../../utils/errorHandler";
import jwt from "jsonwebtoken";

class AuthController {
  static login = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await AuthService.login({ email, password }, next);

    const accessToken = generateAccessToken({ id: user._id, role: user.role });

    const refreshToken = generateRefreshToken(
      { id: user._id, role: user.role },
      res
    );

    await AuthService.updateUserRefreshToken(user._id, refreshToken);

   
    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      accessToken,
    });
  });

  static logout = catchAsyncErrors(async (req, res, next) => {
    const { rfToken } = req.cookies;

    res.cookie("rfToken", null, {
      path: "/api/auth/refresh_token",
      secure: true,
      sameSite: "none",
      httpOnly: true,
      expires: new Date(Date.now()),
    });

    if (rfToken) {
      const decoded: any = jwt.verify(
        rfToken,
        process.env.REFRESH_TOKEN_SECRET!
      );
      await AuthService.clearUserRefreshToken(decoded.id);
    }

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  });

  static refreshToken = catchAsyncErrors(async (req, res, next) => {
    const { rfToken } = req.cookies;

    if (!rfToken) {
      return next(new ErrorHandler("No refresh token provided", 401));
    }

    const decoded: any = jwt.verify(rfToken, process.env.REFRESH_TOKEN_SECRET!);

    const user = await AuthService.getUserByRefreshToken(rfToken);

    if (!user || user.rf_token !== rfToken) {
      return next(new ErrorHandler("Invalid refresh token", 401));
    }

    const accessToken = generateAccessToken({
      id: decoded.id,
      role: decoded.role,
    });

    res.status(200).json({
      success: true,
      accessToken,
    });
  });
}

export default AuthController;
