import UserModel from "../models/userModel";

const getUserByEmail = async (email: string) => {
	const query = UserModel.where({ email: email });
	return await query.findOne();
};

export default getUserByEmail;
