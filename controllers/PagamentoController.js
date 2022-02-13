const Pagamento = require("../models/Pagamento")

class PagamentoController {

    //
    static async paginaPagamentos(req, res){
        let query = {}
        const {nomePagamento} = req.query

        if(nomePagamento) {

            query = {operation: { $regex: `${nomePagamento}`, $options: "i" }}
        }

        const pagamentos = await Pagamento.find(query).lean()

        res.render("pagamentos", { pagamentos, nomePagamento })
    }

    // Valéria
    static async paginaAddPagamento(req, res) {
        res.render('add_pagamento')
    }

    //Danielle
    static async addPagamento(req, res) {
        const {operation, number, name, expMonth, expYear, cvv, cpf, address, state } = req.body
        const pagamento = Pagamento( { operation, number, name, expMonth, expYear, cvv, cpf, address, state })

        await pagamento.save()

        res.redirect('/pagamentos')
    }

    //
    static async paginaEditPagamento(req, res) {
        const { id } = req.params
        const pagamento = await Pagamento.findById(id).lean()
        res.render("editar_pagamento", {pagamento})
    }
    
    //Sena
    static async editPagamento(req, res) {
        const { id, operation, number, name, expMonth, expYear, cvv, cpf, address, state } = req.body
        console.log(id)
        await Pagamento.findByIdAndUpdate(id, { operation, number, name, expMonth, expYear, cvv, cpf, address, state })

        res.redirect('/pagamentos')
    }

    //Renato - Delete
    static async deletePagamento (req, res) {
        const {id} = req.body

        await Pagamento.findByIdAndDelete(id)

        res.redirect("/pagamentos")
    }


}

module.exports = PagamentoController