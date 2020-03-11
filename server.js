const express = require("express")
const nunjucks = require("nunjucks")
const mongoose = require("mongoose")
const DonorController = require("./DonorController")

const server = express()
server.use(express.static("public"))
server.use(express.urlencoded({ extended: true }))
server.use(express.json());

nunjucks.configure("./", {
    express: server,
    noCache: true,
})

mongoose.connect('mongodb+srv://root:<password>@cluster0-cyb56.mongodb.net/test?retryWrites=true&w=majority', 
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).catch(err => { console.log(err) })

server.get("/", DonorController.index)

server.post("/", DonorController.store)

server.listen(8080, () => {
    console.log("Servidor rodando em: http://localhost:8080")
})
