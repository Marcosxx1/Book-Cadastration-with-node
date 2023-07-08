import Livro from "../models/Livro.js";

export class LivroRepository {
	static getAllLivros = async () => {
		return Livro.find();
	};

	static getLivroById = async id => {
		return Livro.findById(id);
	};

	static createLivro = async livroData => {
		const novoLivro = new Livro(livroData);
		return novoLivro.save();
	};

	static deleteLivro = async id => {
		return Livro.findByIdAndDelete(id);
	};

	static updateLivro = async (id, livroData) => {
		return Livro.findByIdAndUpdate(id, { $set: livroData }, { new: true });
	};
}

export default LivroRepository;
