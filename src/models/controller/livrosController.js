import LivroService from "../services/LivroServices.js";
import errorHandler from "../../helpers/errorHandler.js";

export class LivroController {
	static listarLivros = async (req, res) => {
		try {
			const livrosEncontrados = await LivroService.getAllLivros();
			res.status(200).json(livrosEncontrados);
		} catch (error) {
			errorHandler(error, res);
		}
	};

	static buscarLivroPorId = async (req, res) => {
		try {
			const livroEncontrado = await LivroService.getLivroById(req.params.id);
			if (livroEncontrado) {
				res.status(200).json(livroEncontrado);
			} else {
				res.status(400).json({ error: "Livro não encontrado" });
			}
		} catch (error) {
			errorHandler(error, res);
		}
	};

	static cadastrarLivro = async (req, res) => {
		try {
			const novoLivro = await LivroService.createLivro(req.body);
			res.status(201).json(novoLivro);
		} catch (error) {
			errorHandler(error, res);
		}
	};

	static apagarLivro = async (req, res) => {
		try {
			await LivroService.deleteLivro(req.params.id);
			res.status(200).json({ message: "Livro removido com sucesso" });
		} catch (error) {
			errorHandler(error, res);
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
			errorHandler(error, res);
		}
	};
}

export default LivroController;
