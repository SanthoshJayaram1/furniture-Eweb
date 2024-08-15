import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const url = process.env.DB_URI!;

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    // Connection to mongoose
    await mongoose.connect(url, {
      // useUnifiedTopology: true,
      // useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.error("MongoDB connection failed:", errorMessage);
    // process.exit(1);
  }
};

export default connectDB;
