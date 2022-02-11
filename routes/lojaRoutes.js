const { Router } = require("express")
const LojaController = require("../controllers/LojaController")
const router = Router()

router.get("/lojas", LojaController.paginaLojas)
router.get("/lojas/novo", LojaController.paginaAddLoja)
router.get("/lojas/editar/:id", LojaController.paginaEditLoja)

module.exports = router