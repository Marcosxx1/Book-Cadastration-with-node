import LivroService from "../services/LivroServices.js";

export class LivroController {
	static listarLivros = async (req, res) => {
		try {
			const livrosEncontrados = await LivroService.getAllLivros();
			res.status(200).json(livrosEncontrados);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	};

	static buscarLivroPorId = async (req, res) => {
		try {
			const livroEncontrado = await LivroService.getLivroById(req.params.id);
			res.status(200).json(livroEncontrado);
		} catch (error) {
			res.status(404).json({ message: error.message });
		}
	};

	static cadastrarLivro = async (req, res) => {
		try {
			const novoLivro = await LivroService.createLivro(req.body);
			res.status(201).json(novoLivro);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	};

	static apagarLivro = async (req, res) => {
		try {
			await LivroService.deleteLivro(req.params.id);
			res.status(200).json({ message: "Livro removido com sucesso" });
		} catch (error) {
			res.status(404).json({ message: error.message });
		}
	};

	static atualizarLivro = async (req, res) => {
		try {
			const livroAtualizado = await LivroService.updateLivro(
				req.params.id,
				req.body
			);
			res.status(200).json(livroAtualizado);
		} catch (error) {
			res.status(404).json({ message: error.message });
		}
	};
}

export default LivroController;
