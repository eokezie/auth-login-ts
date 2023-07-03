import { connectDB, disconnectDB } from "./config/db";
import USERS from "./data/userData";
import UserModel from "./models/userModel";

const addUsersToDB = async () => {
	try {
		// Create db connection
		await connectDB();

		// Clear collection if any
		await UserModel.deleteMany();

		// Insert collection
		await UserModel.insertMany(USERS);

		console.log("Added users to db successfully! 🚀");
		process.exit(0); // stop node process with success status
	} catch (error) {
		console.error("Failed to add users to db 😢 with error: ", error);

		await disconnectDB(); // Disconnect from DB
		process.exit(1); // stop node process with error status
	}
};

addUsersToDB();
