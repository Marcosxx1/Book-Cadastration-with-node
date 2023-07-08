import app from './src/app.js';

const port = process.env.PORT || 3000;

app.use((req, res) => {
	res.status(404).json({ error: "Route not found" });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});