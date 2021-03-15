// Tipos

// string, number & boolean
let message: string = 'olá'

console.log(message.toUpperCase())

let total: number
total = 10

let isOpen: boolean
isOpen = false

// Any, Void & Never
let stock: any = 89 // Não é legal usar o any, pois tira o propósito da tipagem

stock = null

// void é utilizado mais para funções, void é método sem retorno
function showInformation(name: string = 'Brenno'): void {
    console.log(name)
}

// never não aceita nenhum tipo, utilizado pra tipar funções que tem exceções e loop infinito
//function error(): never {
//    throw new Error('error')
//}

// Array, Tuple & Enum

// primeira maneira de tipar um array
let typeArrayBasic: Array<number>

typeArrayBasic = [1, 2, 3, 4]

// maneira mais popular de tipar um array
let typeArrayMostUsed: number[]

typeArrayMostUsed = [5, 6, 7, 8]

// tuple = tupla, é um array no qual sabemos a quantidade de items e seu tipo de dado
let tupleArray: [string, number, boolean]

tupleArray = ['a', 1, false]

// enum = enumerador, serve pra criar um conjunto de chaves e valores
enum Colors {
    white = '#fff',
    black = '#000'
}

let white: Colors = Colors.white

console.log(white)

// Type Union
// união de tipos, que é quando queremos que uma variável ou propriedade aceite mais de um tipo

let age: number | string
// inicialmente a variável recebe number, mas se quisermos receber string também podemos
age = 20 
age = 'vinte'

function showPet(pet: 'dog' | 'cat' | 'zebra') {
    console.log(pet)
}

showPet('dog')
showPet('cat')
showPet('zebra')

// Type Aliases
// apelido de tipo,
type Pet = 'dog' | 'cat' | 'zebra'

function showPetTwo(pet: Pet) {
    console.log(pet)
}

function displayPet(pet: Pet) {
    console.log(pet)
}

showPetTwo('zebra')
displayPet('cat')

// Type Inference
// inferência de tipo,
let messageTwo = 'Cataline' // ao passar o mouse sobre a variável messageTwo consta como tipo: string

window.addEventListener('click', (event) => { // passando mouse por cima do parâmetro event vemos que o tipo está como: MouseEvent
    console.log(event.target)
})

// Type Assertion
// afirmação de tipos
const inputName = document.querySelector('#name') as HTMLInputElement

inputName.value
