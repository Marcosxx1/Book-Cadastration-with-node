import mongoose from 'mongoose';


const autorSchema = new mongoose.Schema(
    {
        id: { type: String, },
        nome: {
            type: String,
            required: true,
            unique: true,
            maxlength: 50,
            validate: {
                validator: function (v) {
                    return !/\d/.test(v);
                },
                message: props => `Only letters are allowed`
            }
        },
        nacionalidade: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return !/\d/.test(v);
                },
                message: props => `Only letters are allowed`
            }
        },
    },
    {
        versionKey: false
    })

const Autor = mongoose.model("Autor", autorSchema);

export default Autor;