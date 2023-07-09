import mongoose from 'mongoose';


const autorSchema = new mongoose.Schema(
    {
        id: { type: String, },
        nome: {
            type: String, required: true, maxlength: 50, validate: {
                validator: function (v) {
                    return !/\d/.test(v);
                },
                message: props => `Only letters are allowed`
            }
        },
        nacionalidade: {
            type: String, required: true, validate: {
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

const autores = mongoose.model('autores', autorSchema);

export default autores;