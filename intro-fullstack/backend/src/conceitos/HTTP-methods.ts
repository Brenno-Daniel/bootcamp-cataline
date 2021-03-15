import express from 'express'

// O node executa o código na vertical, ou seja, ele lê o código e executa de cima para baixo, por isso o código é estruturado dessa maneira.*

const app = express()

// Métodos HTTP -> GET | POST | PUT | DELETE

// http://localhost:3333/users

app.get('/users', (request, response) => {
    return response.json(['user1', 'user2', 'user3'])
})

app.post('/users', (request, response) => {
    return response.json({ message: 'Criando usuário' })
})

app.put('/users', (request, response) => {
    return response.json({ message: 'Atualizando usuário' })
})

app.delete('/users', (request, response) => {
    return response.json({ message: 'Excluindo usuário' })
})

app.listen('3333', () => {
    console.log('Back-end Started!!!')
})