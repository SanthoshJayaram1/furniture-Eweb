import express from "express";
import dotenv from "dotenv";
import authRoutes from "./modules/auth/authRoutes";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import ErrorHandler from "./utils/errorHandler";
import errorHandler from "./middlewares/errorHandler";
import uploadExcelRoute from "./modules/uploadExcel/uploadExcelRoutes"; 

const app = express();
dotenv.config();

// Middlewares
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "jwt-token",
      "Access-Control-Allow-Credentials",
    ],
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use('/api', uploadExcelRoute);

// Handle undefined routes
app.all("*", (req, res, next) => {
  next(new ErrorHandler(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Error handling middleware
app.use(errorHandler);

export default app;
