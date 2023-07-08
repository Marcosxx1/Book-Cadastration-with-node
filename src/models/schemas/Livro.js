import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
	id: { type: String },
	titulo: { type: String, required: true },
	autor: { type: String, required: true },
	editora: { type: String, required: true },
	numPagina: { type: Number },
});

const Livro = mongoose.model("Livro", livroSchema);

export default Livro;