const errorHandler = (res, error) => {
	res.status(error.status || 500).json({ error: error.message });
};

export default errorHandler;
