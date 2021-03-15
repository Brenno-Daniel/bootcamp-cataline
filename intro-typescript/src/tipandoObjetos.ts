// Interfaces
type UF = 'PE' | 'SP' | 'MG'

interface User {
    name: string,
    address?: { // propriedade opcional
        city: string
        UF: UF
    }
}

// Propriedades opcionais
// ao adicionar o ? em frente da propriedade ela se torna opcional

function showCity(user: User) {
    return user.address?.city
    // return user.address ? user.address.city : 'não existe'
}

const response = showCity({
    name: 'Brenno',
    address: {
        city: 'SJC',
        UF: 'SP'
    }
})

console.log(response)

// Propriedades readonly

interface UserNameReadonly {
    readonly name: string // com readonly é como se declarássemos uma const
    age: number
}

let user: UserNameReadonly = {
    name: 'Brendon',
    age: 22
}

user.age = 23
// user.name = 'Brendo' // não podemos reatribuir valor em propriedade readonly


// Extends, Implements

// Extends= unir duas interfaces
interface Veiculo {
    rodas: number
    acelerar: () => void
    frear?: () => void
}

interface Moto extends Veiculo { // quando a Moto estende a interface Veiculo, a moto tem acesso nas propriedades do veiculo
    capacete: boolean
    empinar: () => void
}

let bross: Moto = {
    capacete: true,
    empinar() {},
    rodas: 2,
    acelerar() {},
    frear() {}
}

bross.acelerar()
bross.empinar()

// Implements = criar uma classe a partir de uma interface
class CriarVeiculo implements Veiculo {
    rodas: number
    
    constructor(rodas: number) {
        this.rodas = rodas
    }

    acelerar() {
        console.log('acelerando')
    }
}

// Pick & Omit

interface Post {
    id: number
    title: string
    description: string
}

// Pick = serve para selecionar algumas propriedades de uma interface ou o tipo, e com base nessas propriedades criar um novo tipo
type PostPreviewPick = Pick<Post, 'id' | 'title'> // vou ter acesso ao id e title da interface Post

let postPick: PostPreviewPick
// postPick.id
// postPick.title

// Omit = ao contrário do Pick, com base em uma interface ou tipo, a gente seleciona algumas propriedades para omitir, e pega o restante das propriedades e cria um novo tipo
type PostPreviewOmit = Omit<Post, 'id' | 'title'> // vou ter acesso somente ao description da interface Post

let postOmit: PostPreviewOmit
// postOmit.description
