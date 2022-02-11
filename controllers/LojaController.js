const Loja = require("../models/Loja")

class LojaController {

    //
    static async paginaLojas(req, res){
        let query = {}
        const {nomeLoja} = req.query

        if(nomeLoja) {

            query = {name: { $regex: `${nomeLoja}`, $options: "i" }}
        }

        const lojas = await Loja.find(query).lean()

        res.render("lojas", { lojas, nomeLoja })
    }

    // Valéria
    static async paginaAddLoja(req, res) {
        res.render('add_loja')
    }

    //Danielle
    static async addLoja(req, res) {
        const {state, name, cnpj, address, operationOpen, operationClose, reputation, number  } = req.body
        const loja = Loja( { state, name, cnpj, address, operationOpen, operationClose, reputation, number })

        await loja.save()

        res.redirect('/lojas')
    }

    //
    static async paginaEditLoja(req, res) {
        const { id } = req.params
        const loja = await Loja.findById(id).lean()
        res.render("editar_loja", {loja})
    }
    
    //Sena
    static async editLoja(req, res) {
        const {id, state,name, cnpj, address,operationOpen, operationClose, reputation, number  } = req.body

        await Loja.findByIdAndUpdate(id, {state,name, cnpj, address, operationOpen, operationClose, reputation, number})

        res.redirect('/lojas')
    }

    //Renato - Delete
    static async deleteLoja (req, res) {
        const {id} = req.body

        await Loja.findByIdAndDelete(id)

        res.redirect("/lojas")
    }


}

module.exports = LojaController