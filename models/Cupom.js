const { model, Schema } = require('mongoose')

const Cupom = model(
    'Cupom',
    new Schema({
        name: { type: String, required: true},
        value: { type: Number, required: true},
        expiration: { type: String, required: true},
    })
)

module.exports = Cupom