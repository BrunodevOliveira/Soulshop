const { model, Schema } = require('mongoose')

const Loja = model (
    "Loja",
    new Schema({
        state: { type: String, required: true},
        name: { type: String, required: true},
        cnpj: { type: Number, required: true},
        address: { type: String, required: true },
        operation: { type: Date, required: true },
        reputation: { type: Number, required: true }
    })
)

module.exports = Loja