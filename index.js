const express = require("express")
const app = express()
const  port = 3000
app.use(express.json())

app.get("/bem vindo", (req, res)=>{
    res.send("Óla, seja bem vindo a API")
})

app.post("/bem vindo", (req, res)=>{
    const dados = req.body           
    res.send("Óla, seja bem vindo" + dados.nome)
})


const usuarios = []
app.post("/usuarios", (req, res)=>{
    const usuario = req.body
    usuarios.push(usuario)
    res.send("Usuario cadastrado com sucesso!")
})

app.get("/usuario", (req, res)=>{
    res.send(usuarios)
})
app.listen(port, () =>{
    console.log("API RODANDO NA PORTA " + port)
})