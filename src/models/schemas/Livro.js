import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
	id: { type: String },
	title: { type: String, required: true },
	author: { type: String, required: true },
	publisher: { type: String, required: true },
	numPag: { type: Number, min: 1, max: 3000, required: true },
});

const Livro = mongoose.model("Livro", livroSchema);

export default Livro;