// Error Handler Class
class ErrorHandler extends Error {
  statusCode: number;
  constructor(message: string | undefined, statusCode: number) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
