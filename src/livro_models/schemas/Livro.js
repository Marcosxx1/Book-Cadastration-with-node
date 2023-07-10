import mongoose from "mongoose";


const livroSchema = new mongoose.Schema({
	title: { type: String, required: true },
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Autor",
		required: true,
	},
	publisher: { type: String, required: true },
	numPag: { type: Number, min: 1, max: 3000 },
});

const Livro = mongoose.model("Livro", livroSchema);

export default Livro;
