const Cupom = require('../models/Cupom')

class CupomController {

    static async paginaCupom(req, res) {
        let query = {}
        const {nomeCupom} = req.query

        if(nomeCupom) {
            query = { name: { $regex: `${nomeCupom}`, $options: "i" } }
        }

        const cupons = await Cupom.find(query).lean()

        res.render('cupons', { cupons, nomeCupom })
    }

    static async paginaAdicionarCupom(req, res) {
        res.render('add_cupom')
    }

    static async addCupom(req, res) {
        const { name, value, expiration } = req.body

        const cupom = Cupom({ name, value, expiration })

        await cupom.save()

        res.redirect('/cupons')
    }

    static async paginaEditCupom(req, res) {
        const { id } = req.params
        const cupom = await Cupom.findById(id).lean()

        res.render('editar_cupom', { cupom })
    }

    static async editCupom(req, res) {
        const { id, name, value, expiration } = req.body

        await Cupom.findByIdAndUpdate(id, { name, value, expiration })

        res.redirect('/cupons')
    }

    static async deleteCupom(req, res) {
        const  { id } = req.body

        await Cupom.findByIdAndDelete(id)

        res.redirect('/cupons')
    }

}

module.exports = CupomController