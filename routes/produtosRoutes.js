const {Router} = require('express')
const ProdutoController = require("../controllers/ProdutoController")
const router = Router()

router.get("/produtos", ProdutoController.paginaProdutos)

router.get("/produtos/novo", ProdutoController.paginaAdicionarProduto)

router.get("/produtos/editar/:id", ProdutoController.paginaEditProduto)

router.post("/produtos/atualizar", ProdutoController.editProduto)

router.post("/produtos/enviar", ProdutoController.addProduto)

router.post("/produtos/deletar", ProdutoController.deleteProduto)

router.get("/produtos/:id", ProdutoController.paginaProduto)

router.post("/produtos/add_avaliacao", ProdutoController.addAvaliacao)

router.post("/produtos/delete_avaliacao", ProdutoController.produtoCommentDelete)

router.post("/produtos/update_avaliacao", ProdutoController.produtoCommentEdit)

module.exports = router