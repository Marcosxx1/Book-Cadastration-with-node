import express, { json } from 'express';
import db from './config/dbConnect.js';
import livros from './models/Livro.js';

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
    console.log("conexão com o banco feita com sucesso");
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Curso node');
});

app.get('/livros', async (req, res) => {
    try {
        const livrosEncontrados = await livros.find();
        res.status(200).json(livrosEncontrados);
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
})

app.get("/livros/:id", async (req, res) => {
    try {
        const livroEncontrado = await livros.findById(req.params.id);
        res.status(200).json(livroEncontrado);
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
})

app.post('/livros', (req, res) => {
    const livro = req.body;
    livros.push(livro);
    res.status(201).json("Livro cadastrada");
})

app.put('/livros/:id', (req, res) => {
    livros[index] = req.body;
    console.log(livros);
    res.status(200).json("Livro atualizada");
});


app.delete('/livros/:id', (req, res) => {
    const { id } = req.params;
    livros.splice(index, 1);
    res.send("Livro deletado");
});

app.patch('/livros/:id', (req, res) => {
    const { id } = req.params;
    livros[index] = req.body;
    res.send("Livro atualizado");
});


export default app;