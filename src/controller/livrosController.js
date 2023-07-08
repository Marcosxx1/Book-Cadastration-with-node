import livros from "../models/Livro.js";

export class LivroController {

    static listarLivros = async (req, res) => {
        try {
            const livrosEncontrados = await livros.find();
            res.status(200).json(livrosEncontrados);
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    static buscarLivroPorId = async (req, res) => {
        try { 
            const livroEncontrado = await livros.findById(req.params.id);
            res.status(200).json(livroEncontrado);
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    static cadastrarLivro = async (req, res) => {
        try {
            const novoLivro = new livros(req.body);
            const livroSalvo = await novoLivro.save();
            res.status(201).json(livroSalvo);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static apagarLivro = async (req, res) => {
        try {
            const livroRemovido = await livros.findByIdAndDelete(req.params.id);
            if (livroRemovido) {
                res.status(200).json({ message: "Livro removido com sucesso" });
            }
            else {
                res.status(404).json({ message: "Livro não encontrado" });
            }
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static atualizarLivro = async (req, res) => {
        try {
            const livroAtualizado = await livros.findByIdAndUpdate(req.params.id,
                { $set: req.body },
                { new: true });
            res.status(200).json(livroAtualizado);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}


export default LivroController; 