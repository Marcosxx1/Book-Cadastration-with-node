import AutorService from "../services/autorService.js";
import errorHandler from "../../helpers/errorHandler.js";

export class AutorController {
    static listarAutores = async (req, res) => {
        try {
            const autorsEncontrados = await AutorService.getAllAutores();
            res.status(200).json(autorsEncontrados);
        } catch (error) {
            errorHandler(res, error);
        }
    };

    static buscarAutorPorId = async (req, res) => {
        try {
            const autorEncontrado = await AutorService.getAutorById(req.params.id);
            if (autorEncontrado) {
                res.status(200).json(autorEncontrado);
            } else {
                res.status(400).json({ error: "Autor não encontrado" });
            }
        } catch (error) {
            errorHandler(res, error);
        }
    };

    static cadastrarAutor = async (req, res) => {
        try {
            const novoAutor = await AutorService.createAutor(req.body);
            res.status(201).json(novoAutor);
        } catch (error) {
            errorHandler(res, error);
        }
    };

    static apagarAutor = async (req, res) => {
        try {
            await AutorService.deleteAutor(req.params.id);
            res.status(200).json({ message: "Autor removido com sucesso" });
        } catch (error) {
            errorHandler(res, error);
        }
    };

    static atualizarAutor = async (req, res) => {
        try {
            const autorAtualizado = await AutorService.updateAutor(
                req.params.id,
                req.body
            );
            res.status(200).json(autorAtualizado);
        } catch (error) {
            errorHandler(res, error);
        }
    };
}

export default AutorController;
