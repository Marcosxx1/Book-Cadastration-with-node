import express, { json } from 'express';
import uuidv4 from 'uuidv4'

const app = express();

app.use(express.json());

const livros = [
    { id: 1, "titulo": "Livro 1" },
    { id: 2, "titulo": "Livro 2" }
]

app.get('/', (req, res) => {
    res.status(200).send('Curso node');
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    res.json(livros[index]);
})


app.post('/livros', (req, res) => {
    const livro = req.body;
    livros.push(livro);
    res.status(201).json("Livro cadastrada");
})

app.put('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index] = req.body;
    console.log(livros);
    res.status(200).json("Livro atualizada");
});


app.delete('/livros/:id', (req, res) => {
    const { id } = req.params;
    const index = buscaLivro(id);
    livros.splice(index, 1);
    res.send("Livro deletado");
});

app.patch('/livros/:id', (req, res) => {
    const { id } = req.params;
    const index = buscaLivro(id);
    livros[index] = req.body;
    res.send("Livro atualizado");
});

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}
export default app;