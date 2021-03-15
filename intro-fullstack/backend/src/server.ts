import express, { request, response } from 'express'
import { v4 as uuid } from 'uuid'

const app = express()

app.use(express.json())

interface User {
    id: string
    name: string
    email: string
}

// Como não estamos usando banco de dados as informações serão salvas nessa array.
// Informações ficam disponíveis apenas em momento de execução da aplicação.**
const users: User[] = []

app.get('/users', (request, response) => {
    // buscar no banco de dados os usuários
    // retornar os usuários

    // como não temos bd, iremos retornar uma resposta em formato json dos usuários
    return response.json(users)
})

app.post('/users', (request, response) => {
    // receber os dados do novo usuário ***
    const { name, email } = request.body

    // criar um novo usuário ***
    // biblioteca uuid - universal unique id:
    // npm install uuid
    // npm install @types/uuid -D
    const user = { id: uuid(), name, email }

    // registrar esse usuário na base de dados ***
    users.push(user)

    // retornar os dados do usuário criado ***
    return response.json(user)
})

app.put('/users/:id', (request, response) => {
    // receber os dados do usuário
    const { id } = request.params
    const { name, email } = request.body

    // localizar o usuário na base de dados
    const userIndex = users.findIndex((user) => user.id === id)

    // se o usuário não existir, retornar um erro
    if (userIndex < 0) {
        return response.status(404).json({ error: 'User not found.' })
    }

    // atualiza o usuário na base de dados
    const user = { id, name, email }

    users[userIndex] = user

    // retorna os dados do usuário atualizado
    return response.json(user)
})

app.delete('/users/:id', (request, response) => {
    // receber o id do usuário
    const { id } = request.params

    // localizar o usuário na base de dados
    const userIndex = users.findIndex((user) =>  user.id === id)

    // se o usuário não existir, retornar um erro
    if (userIndex < 0) {
        return response.status(404).json({ message: 'User not found.' })
    }

    // excluir usuário da base de dados
    users.splice(userIndex, 1)

    // retorna status de sucesso
    return response.status(204).send()
})

app.listen('3333', () => {
    console.log('Back-end Started!!!')
})