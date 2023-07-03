import pkg from "jsonwebtoken";

const { sign } = pkg;

const createAccessToken = (email: string) => {
	return sign({ email: email }, process.env.ACCESS_TOKEN_SECRET!, {
		expiresIn: "1d",
	});
};

export default createAccessToken;
