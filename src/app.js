import express from 'express';

const app = express();

app.use(express.json());
const livros = [
    { id: 1, nome: 'Algoritmos para viver', autor: 'Brian', categoria: 'Tecnologia', paginas: 500 }
    , { id: 2, nome: 'Aprenda Node', autor: 'Brian', categoria: 'Tecnologia', paginas: 500 }
]

app.get('/', (req, res) => {
    res.status(200).send('Curso node');
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

export default app;