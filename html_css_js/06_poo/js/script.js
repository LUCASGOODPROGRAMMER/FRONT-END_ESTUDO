console.log("testando js");

// métodos: uma propriedade que contem um função
// toda função dentro um objeto é um método
const animal = {
  nome: "lucas",
  age: 17,
  sexo: "masculino",
  exibir: () => {console.log('dados exibidos')} // fim do método
}; // fim do object literals

console.log(animal.nome);
console.log(animal.age);
console.log(animal.sexo);

// const { nome: nome, age: age, sexo: sexo } = animal;
// console.log(nome)
// console.log(age)
// console.log(sexo)

animal.exibir()

// mais sobre métodos
const pessoa = {
    nome: 'lucas',

    getNome: function () {
        console.log(this.nome) // this.nome se refere á propriedade do método
    },// fim do método

    special() {
        console.log(`olá ${this.nome}`)
    },// método simplificado

    // erroArrow: () => {
    //     console.log(this)
    // }//método com arrow function o this em arrow function aponta para o escopo externo e não interno

    setNome(category) {
        return this.nome = this.nome + category;
    }// fim do método

} // fim do object literals
pessoa.getNome()
pessoa.special()
// pessoa.erroArrow()
console.log(pessoa.setNome(' hubner'))

// Prototype
const text = 'asdfg'
const number = 2
const boolean = true
const array = []
const object = {}
console.log(Object.getPrototypeOf(text))
console.log(Object.getPrototypeOf(number))
console.log(Object.getPrototypeOf(boolean))
console.log(Object.getPrototypeOf(array))
console.log(Object.getPrototypeOf(object))

// mais sobre prototype
const objeto = {
    a: 'a'
}
console.log(Object.getPrototypeOf(objeto))

const secondObject = Object.create(objeto) // cadeia de protótipos
console.log(secondObject)
console.log(secondObject.a)
console.log(Object.getPrototypeOf(secondObject) === objeto)

// classes básicas
const cachorro = {
    raca: null,
    price: null
}

const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = 'pastor alemão'
pastorAlemao.price = 1200

console.log(pastorAlemao)

const pitbull = Object.create(cachorro)
pitbull.raca = 'pitbull'
pitbull.price = 700
console.log(pitbull)

// funções como classe

// function criarCachorro(nome,raca) {
//     const cachorro = Object.create({})

//     cachorro.nome = nome
//     cachorro.raca = raca
//     return cachorro
// }

// const malboro = criarCachorro('cachorro','cachorro')
// console.log(malboro)

let id = 1
const metodosLoja = {
    comprimentar() {
        console.log(`\nseja bem vindo ${this.nome}`)
    }, // fim do método
    registrar() {
        console.log(`${this.nome} comprou ${this.produto}`)
    } // fim do método
}
const criarRegistro = (nome, produto) => {
    const cliente = Object.create(metodosLoja) // estou fazendo o cliente herdar os métodos do objeto, com o create, não ocorre duplicação
    cliente.id = id++
    cliente.nome = nome
    cliente.produto = produto
    cliente.comprimentar()
    cliente.registrar()
    console.log(cliente)
    return cliente
}

criarRegistro('lucas', 'shampoo')
criarRegistro('Einstein', 'calça')
criarRegistro('keynner', 'jogo')

// classes baseadas em funções
// new: usado para instanciar novos objetos

let idMercado = 1
function Mercado(nome, local) {
    this.id = idMercado++
    this.nome = nome
    this.local = local
}

const mercado = new Mercado("são joão", 'avenida tal')

console.log(mercado)

// classes de função com métodos
// métodos na função construtora
Mercado.prototype.funcionarios = () => {
    console.log(2000)
}
mercado.funcionarios()

// Classes ES6
// nas versões mais atuais de JS, as function foram abandonada e utiliza-se mais as classes

class BairroClasse {
    constructor(nome, tamanho) {
        this.nome = nome
        this.tamanho = tamanho
    }// criação de objeto atual
}

const bairro = new BairroClasse('Bela Vista', 'pequeno')
console.log(bairro)

// mais sobre classes
class Carro {
    constructor(nome, modelo, ano){
        this.nome = nome
        this.modelo = modelo
        this.ano = ano
    } // fim do objeto
    descricao() {
        console.log(`\nnome:${this.nome}\nmodelo:${this.modelo}\nano:${this.ano}`)
    } // fim do método
} // fim da classe ou molde (modelo)

const bmw = new Carro('bmw', 'm4', 2016)

console.log(bmw.descricao())

Carro.prototype.motor = 'v8'

console.log(bmw.motor)

// Override nas propriedades via Prototype
class Humano {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

const lucas = new Humano('lucas', '17')
console.log(lucas)

Humano.prototype.idade = 'sem registro'
console.log(lucas.idade)

console.log(Humano.prototype.idade)

// Symbols em Classes
class Trem {
    constructor(motor, rodas){
        this.motor = motor
        this.rodas = rodas
    }
}

const portas = Symbol()
const pilotos = Symbol()

Trem.prototype[portas] = 6
Trem.prototype[pilotos] = 2

const boeing = new Trem('v12', 8)

console.log(boeing)

console.log(boeing[portas])
console.log(boeing[pilotos])

// Getters e Setters
// get é um método de exibição
// set é um método de alteração
class Post {
    constructor(titulo, descricao, tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo() {
        return `você está lendo ${this.titulo}`
    }
    set adicionarTags(tags) {
        const tagsArrays = tags.split("#")
        this.tags = tagsArrays
    }
}

const myPost = new Post("Algum post", "é um post de programação")

console.log(myPost)
console.log(myPost.exibirTitulo)

myPost.adicionarTags ="#prog#front#end"
console.log(myPost)

// Herança
// extends e super
class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

class Lobo extends Mamifero{
    constructor(patas, nome) {
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lobo(4, 'lobo cinza')

console.log(shark)
console.log(shark.patas)

// Operador instanceof
// usado para verificar se um objeto é pai do outro

console.log(shark instanceof Lobo)
console.log(shark instanceof Mamifero)
console.log(Lobo instanceof Mamifero) // retornara falso pq estou comparando as classes
console.log(new Lobo(4, 'lobo branco') instanceof Mamifero) // retornara true pq estou verificando de objeto para classe