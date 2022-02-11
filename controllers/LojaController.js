class LojaController {

    static async paginaLojas(req, res){
        res.render("loja")
        // req.send("Olá, sou a rota de lojas!")
    }

    static async paginaAddLoja(req, res) {
        res.render("add_loja")
    }

    static async paginaEditLoja(req, res) {
        res.render("editar_loja")
    }
}

module.exports = LojaController