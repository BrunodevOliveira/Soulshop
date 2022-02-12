const { model, Schema } = require('mongoose')

const Loja = model (
    "Loja",
    new Schema({
        state: { type: String, required: true},
        name: { type: String, required: true},
        cnpj: { type: String, required: true},
        address: { type: String, required: true },
        operationOpen: { type: String, required: true },
        operationClose: { type: String, required: true },
        reputation: { type: Number, required: true },
        number: { type: String, required: true },
    })
)

module.exports = Loja