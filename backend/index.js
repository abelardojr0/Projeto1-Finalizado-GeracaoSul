import express from 'express'
import mysql from 'mysql2/promise'
import cors from 'cors'

const PORT = 3000

const app = express()
app.use(express.json())
app.use(cors())

const conexao = mysql.createPool({
    host: "barbearia-db",
    user: "alberto",
    password: "123456",
    database: "barbearia-banco"
})

app.get("/", (req, res) =>{
    res.send("API ESTÁ FUNCIONANDO")
})

app.get("/produtos", async (req, res)=>{
    const inxame = "SELECT * FROM produtos"
    const [produtos] = await conexao.query(inxame)
    res.json(produtos)
})

app.get("/servicos", async (req, res)=>{
    const inxame = "SELECT * FROM servicos"
    const [servicos] = await conexao.query(inxame)
    res.json(servicos)
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})