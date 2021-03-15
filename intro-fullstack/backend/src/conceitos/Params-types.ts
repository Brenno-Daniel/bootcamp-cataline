import express from 'express'

const app = express()

// Informar ao Express que precisa receber um body do tipo JSON (request body)
app.use(express.json())

// Tipos de parâmetros
// -------------------
// Query Params: Mais utilizado quando queremos fazer filtro de informações durante uma requisição.

// Route Params: Utilizados para identificar os recursos numa rota.

// Request Body: Utilizada quando precisamos enviar várias requisições para nossa API mas sem ser através da URL.

// Query Params
app.get('/users', (request, response) => {
    // const query = request.query
    const { perPage, page } = request.query

    // console.log(query)
    console.log(perPage)
    console.log(page)

    return response.json({})
})

// Request Body
app.post('/users', (request, response) => {
    const body = request.body

    console.log(body)

    return response.json({ message: 'Atualizando usuário' })
})

// Route Params
app.put('/users/:id', (request, response) => {
    // const params = request.params
    const { id } = request.params

    // console.log(params)
    console.log(id)

    return response.json({ message: 'Atualizando usuário'})
})

app.delete('/users', (request, response) => {
    return response.json({ message: 'Excluindo usuário' })
})

app.listen('3333', () => {
    console.log('Back-end Started!!!')
})