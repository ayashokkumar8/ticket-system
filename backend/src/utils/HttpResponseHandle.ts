// format and send API response, msessage and data to clients
const HttpResponseHandle = (status: number, message: string | null, error: any | null, data: any | null) => {
	if (error != null && error instanceof Error) {
		const errorEesponse = {
			status: status,
			message: error.message,
			errors: error,
			data: null
		}

		return errorEesponse;
	}

	const successResponse = {
		status,
		message,
		errors: error,
		data: data
	};

	return successResponse;
};

export default HttpResponseHandle;