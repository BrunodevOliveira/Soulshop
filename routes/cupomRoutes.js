const { Router } = require('express')
const CupomController = require('../controllers/CupomControler')
const router = Router()

router.get('/cupons', CupomController.paginaCupom)
router.get('/cupom/novo', CupomController.paginaAdicionarCupom)
router.get('/cupom/editar/:id', CupomController.paginaEditCupom)

router.post('/cupom/adicionar', CupomController.addCupom)
router.post('/cupom/atualizar', CupomController.editCupom)
router.post('/cupom/deletar', CupomController.deleteCupom)

module.exports = router