import { Request, Response } from "express";
import createAccessToken from "../middlewares/createAccessToken";
import UserModel from "../models/userModel";
import getUserByEmail from "../services/userService";
import { successResponse } from "../utils/successResponse";
import { errorResponse } from "../utils/errorResponse";

type TResquestBody = {
	email: string;
	password: string;
};

const loginUser = async (req: Request, res: Response) => {
	const { email, password }: TResquestBody = req.body;

	try {
		if (!email || !password) {
			throw new Error("Please provide the required credentials!");
		}

		const user = await getUserByEmail(email);

		if(user) {
			const responseBody = {
				user: {
					_id: user?._id,
					name: user?.name,
					email: user?.email,
					password: user?.password,
					role: user?.role,
					__v: user?.__v,
					created_at: user?.createdAt,
					updated_at: user?.updatedAt,
				},
				access_token: createAccessToken(email),
			};
			const responseMessage = "User was authenticated successfully";
	
			res.status(201).json(successResponse(responseMessage, responseBody));
		}else {
			res.status(404).json(errorResponse('User does not exist'))
		}
		
	} catch (error) {
		console.error(error);
		res.status(422).json(errorResponse("Invalid login credentials!"));
	}
};

export default loginUser;
