// Permitindo Javascript
// 3 situações:
// 1 - quando instala uma biblioteca feita em typescript, exemplo do axios que ja tem definição de tipos;
// 2 - quando instala uma biblioteca feita com javascript e o criador criou um pacote a parte que tem a definição de tipos;
// 3 - quando instala uma biblioteca que não foi feita em typescript e não tem um pacote a parte para definição de tipos;

// Path Mapping
// alterar configuração do arquivo tsconfig.json:
// "baseUrl": "./src",
// "paths": {
//    "@/*": ["./*"],
//  }

// Decorators

// export default function log(target: any) {
//    console.log(target)
// }

// @log
// class API {}

function logger(text: string) {
    return (target: any) => {
        console.log(target, text)
    }
}

@logger('Cataline')
class API2 {}

// Decorator - fazer anotação da versão da API

export default function setApiVersion(apiVersion: string) {
    return (constructor: any) => {
        return class extends constructor {
            version = apiVersion
        }
    }
}

@setApiVersion('1.0.0')
class API{}

console.log(new API())
