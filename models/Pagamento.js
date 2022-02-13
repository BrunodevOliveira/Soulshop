const { model, Schema } = require('mongoose')

const Pagamento = model (
    "Pagamento",
    new Schema({
        operation: {type: String, require: false},
        number: { type: String, required: false },
        name: { type: String, required: false},
        expMonth: { type: String, required: false },
        expYear: { type: String, required: false },
        cvv: { type: Number, required: false },
        cpf: { type: String, required: false},
        address: { type: String, required: false },
        state: { type: String, required: false},
    })
)

module.exports = Pagamento