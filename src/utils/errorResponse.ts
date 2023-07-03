export const errorResponse = (message: string): object => {
	return {
		success: false,
		message: message,
		data: null,
	};
};
