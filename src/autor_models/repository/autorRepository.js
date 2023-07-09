import Autor from "../schema/Autor.js";
export class AutorRepository {
    static getAllAutores = async () => {
        return Autor.find();
    };

    static getAutorById = async id => {
        return Autor.findById(id);
    };

    static createAutor = async autorData => {
        const novoAutor = new Autor(autorData);
        return novoAutor.save();
    };

    static deleteAutor = async id => {
        return Autor.findByIdAndDelete(id);
    };

    static updateAutor = async (id, autorData) => {
        return Autor.findByIdAndUpdate(id, { $set: autorData }, { new: true });
    };
}

export default AutorRepository;
