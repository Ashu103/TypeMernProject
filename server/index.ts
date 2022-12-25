import express, { Express } from "express";
import connectDB from "./config/db";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
const app: Express = express();
dotenv.config();

connectDB();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (): void => console.log(`Server is running on PORT ${PORT}`));
