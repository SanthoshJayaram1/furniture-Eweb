import { Request, Response, NextFunction } from "express";

const catchAsyncErrors =
  (func: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction): Promise<void> =>
    Promise.resolve(func(req, res, next)).catch(next);

export default catchAsyncErrors;
