import express, { Application } from "express";
import cors from "cors";

import { connectDB } from "./config/db";
import authRouter from "./routes/authRoute";

const app: Application = express();

app.use(cors());
app.use(express.json()); // Parse incoming request body to JSON

await connectDB(); // Use top level await to start Mongodb connection

// API Routes
app.use("/api/auth", authRouter); //auth route

const startServer = (port: string) => {
	try {
		app.listen(port, (): void => {
			console.log("Server is running successfully 🚀");
		});
	} catch (error) {
		console.error("Server crashed 😢 with error: ", error);
		process.exit(1);
	}
};

startServer(process.env.PORT ?? "4000");
