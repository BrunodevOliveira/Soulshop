const { Router } = require("express")
const PagamentoController = require("../controllers/PagamentoController")
const router = Router()

router.get("/pagamentos", PagamentoController.paginaPagamentos)
router.get("/pagamentos/novo", PagamentoController.paginaAddPagamento)
router.get("/pagamentos/editar/:id", PagamentoController.paginaEditPagamento)

router.post("/pagamentos/atualizar", PagamentoController.editPagamento)
router.post("/pagamentos/deletar", PagamentoController.deletePagamento)
router.post("/pagamentos/enviar", PagamentoController.addPagamento)


module.exports = router