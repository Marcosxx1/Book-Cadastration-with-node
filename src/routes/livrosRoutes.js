import express from 'express';
import LivroController from '../controller/livrosController.js';

const router = express.Router();

router
    .get('/livros', LivroController.listarLivros)
    .get('/livros/:id', LivroController.buscarLivroPorId);

router
    .post('/livros', LivroController.cadastrarLivro);

router
    .patch('/livros/:id', LivroController.atualizarLivro);

router
    .delete('/livros/:id', LivroController.apagarLivro);

export default router;