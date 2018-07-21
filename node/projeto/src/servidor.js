const porta = 3003

const express = require('express')
const app = express()
const bodyParseer = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...')
//     next()

// })

// app.get('/produtos', (req, res, next) => {
//     res.send({
//         nome: 'Notebook',
//         preco: 1234.50
//     })
// })

// app.listen(porta, () => {
//     console.log(`Servidor executando na porta ${porta}.`)
// })

app.use( bodyParseer.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        produto: req.body.produto,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        produto: req.body.produto,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executrando na porta ${porta}`)
})