import Livro from "../schemas/Livro.js";

export class LivroRepository {
	static getAllLivros = async () => {
		return Livro.find().populate("author");
	};

	static getLivroById = async id => {
		return Livro.findById(id);
	};

	static createLivro = async livroData => {
		const novoLivro = new Livro(livroData);
		return novoLivro.save();
	};

	static deleteLivro = async id => {
		const livro = await Livro.findById(id).populate("author");

		if (!livro) {
			throw new Error("Livro not found");
		}

		if (livro.author.livrosCount > 0) {
			throw new Error("Cannot delete livro. Author has associated books.");
		}

		return Livro.findByIdAndDelete(id);
	};

	static updateLivro = async (id, livroData) => {
		return Livro.findByIdAndUpdate(id, { $set: livroData }, { new: true });
	};
}

export default LivroRepository;
