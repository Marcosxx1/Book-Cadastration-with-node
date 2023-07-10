import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
	id: { type: String },
	title: { type: String, required: true },
	author: { type: String, required: true },
	publisher: { type: String, required: true },
	numPag: { type: Number, min: 1, max: 3000, required: true },
	titulo: { type: String, required: true },
	autor: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "autores",
		required: true,
	},
	editora: { type: String, required: true },
	numPagina: { type: Number, min: 1, max: 3000 },
});

const Livro = mongoose.model("Livro", livroSchema);

export default Livro;
