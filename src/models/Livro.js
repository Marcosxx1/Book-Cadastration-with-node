import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LivroSchema = new mongoose.Schema({

    id: { type: String },
    titulo: { String, required: true },
    autor: { String, required: true },
    editora: { String, required: true },
    numPaginas: { Number, required: true }

})

const livros = mongoose.model('livros', LivroSchema);

export default livros;