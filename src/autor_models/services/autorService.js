import AutorRepository from "../repository/autorRepository.js";

export class AutorService {
    static getAllAutores = async () => {
        return AutorRepository.getAllAutores();
    };

    static getAutorById = async id => {
        const autor = await AutorRepository.getAutorById(id);
        if (!autor) {
            throw new Error("Author not found");
        }
        return autor;
    };

    static createAutor = async autorData => {
        try {
            return await AutorRepository.createAutor(autorData);
        } catch (error) {
            if (error.name === 'MongoError' || error.code === 11000) {
                throw new Error('A record with this name already exists');
            } else if (error.name === 'ValidationError') {
                throw new Error(error.message);
            } else {
                throw error;
            }
        }
    };


    static deleteAutor = async id => {
        const autorRemovido = await AutorRepository.deleteAutor(id);
        if (!autorRemovido) {
            throw new Error("Autor not found");
        }
        return autorRemovido;
    };

    static updateAutor = async (id, autorData) => {
        const autorAtualizado = await AutorRepository.updateAutor(id, autorData);
        if (!autorAtualizado) {
            throw new Error("Autor not found");
        }
        return autorAtualizado;
    };
}

export default AutorService;
