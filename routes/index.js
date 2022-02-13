const { Router } = require("express")
const produtosRoutes = require("./produtosRoutes")
const lojaRoutes = require("./lojaRoutes")
const cuponsRoutes = require("./cupomRoutes")
const pagamentoRoutes = require("./pagamentoRoutes")

const router = Router()

router.get("/", (req, res) => {
    res.render("home")
})

router.use(produtosRoutes)
router.use(lojaRoutes)
router.use(cuponsRoutes)
router.use(pagamentoRoutes)

router.use((req, res) => {
    res.render("404")
})

module.exports = router