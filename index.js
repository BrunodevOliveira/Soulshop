require("dotenv/config") //Definindo variáveis de ambiente
require('./database')

//Importando Express e o Express-Handlebars
const express = require('express')
const exprhbs = require ("express-handlebars")

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))

//Configurações do Handlebars
app.engine('handlebars', exprhbs.engine())
app.set("view engine", "handlebars")

//Rotas
const routes = require("./routes")
app.use(routes)

app.listen(3000)