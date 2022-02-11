const { Router } = require("express")
const LojaController = require("../controllers/LojaController")
const router = Router()

router.get("/lojas", LojaController.paginaLojas)
router.get("/lojas/novo", LojaController.paginaAddLoja)
router.get("/lojas/editar/:id", LojaController.paginaEditLoja)

router.post("/lojas/atualizar", LojaController.editLoja)
router.post("/lojas/deletar",  LojaController.deleteLoja)
router.post("/lojas/enviar",  LojaController.addLoja)

module.exports = router