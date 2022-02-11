const Loja = require("../models/Loja")

class LojaController {

    static async paginaLojas(req, res){
        let query = {}
        const {nomeLoja} = req.query

        if(nomeLoja) {

            query = {name: { $regex: `${nomeLoja}`, $options: "i" }}
        }

        const lojas = await Loja.find(query).lean()

        res.render("loja", { lojas, nomeLoja })
    }

    static async paginaAddLoja(req, res) {
        res.render("add_loja")
    }

    static async paginaEditLoja(req, res) {
        res.render("editar_loja")
    }
}

module.exports = LojaController