import LivroRepository from "../repository/LivroRepository.js";

export class LivroService {
	static getAllLivros = async () => {
		return LivroRepository.getAllLivros();
	};

	static getLivroById = async id => {
		const livro = await LivroRepository.getLivroById(id);
		if (!livro) {
			throw new Error("Livro not found");
		}
		return livro;
	};

	static createLivro = async livroData => {
		return LivroRepository.createLivro(livroData);
	};

	static deleteLivro = async id => {
		const livroRemovido = await LivroRepository.deleteLivro(id);
		if (!livroRemovido) {
			throw new Error("Book not found");
		}
		return livroRemovido;
	};

	static updateLivro = async (id, livroData) => {
		const livroAtualizado = await LivroRepository.updateLivro(id, livroData);
		if (!livroAtualizado) {
			throw new Error("Book not found");
		}
		return livroAtualizado;
	};
}

export default LivroService;
