//VAR LET E CONST
/*
LET é uma forma de atribuir valor e alterar depois;
CONST é uma forma de definir um valor que não pode ser mudado
*/
console.log('EXEMPLO COM VAR:')
var x = 10;
var y = 15;
console.log(x)
if(y > 10){
    var x = 5 //a declaração afetou a variavel em todos escopos
    console.log(x)
}
console.log(x)

console.log('EXEMPLO COM LET:')
let a = 10;
let b = 15;
if(b > 10){
    let a = 5 //com let as declarações dentro de um escopo não altera outros escopo 
    console.log(a)
}
console.log(a)

console.log("EXEMPLO COM FUNCTION:")
function logName() {
    const name = "lucas"
    console.log(name)
}
const name = "Keynner"

console.log(name)
console.log(logName())

// ARROW FUNCTIONS
console.log("EXEMPLO COM ARROW FUNCTION:")
const sum = function (a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {
    if(name){
        return `helloooo ${name}`
    } return `hello`
}

console.log(greeting())
console.log(greeting("lucas"))

// console.log("EXEMPLOS DE THIS")
// const user = {
//     name: "keynner",
//     sayUserName(){
//         setTimeout(function () {
//             console.log(this) // em function normal o this aponta para o objeto global
//             console.log(`Username: ${this.name}`)
//             // o this é utilizado para referenciar a declaração do elemento pai
//         }, 1000)
//     },

//     sayUserNameAroow() {
//         setTimeout(() => {
//             console.log(this) // em arrow funcion é herdado o this do escopo em que foram declaradas
//             console.log(`Username: ${this.name}`)
//         }, 2000)
//     }
// }

// user.sayUserName()
// user.sayUserNameAroow()

console.log("USANDO FILTER")
// filter é um método array usado para filtrar dados
const arr = [1,2,3,4,5,6,7,8]

// const highNumbers = arr.filter((n) => {
//     if(n >= 5) return n
// })
const highNumbers = arr.filter(n => n >= 5)

console.log(highNumbers)

const users = [
    {name: "lucas", age: 17, condicao: true},
    {name: "keynner", age: 17, condicao: true},
    {name: "Einstein", age: 17, condicao: false},
]

const getUsers = users.filter(user => user.condicao)
console.log(getUsers)

console.log("USANDO MAP")
/*
-o map tambem percorre todos elementos do mesmo
-utilizado para modificar o array de origem
-filter remove elementos desnecessários e map os altera
*/
const products = [
    {name: "camisa oversize", price: 142, tamanho: "GG", category: "Camisa"},
    {name: "camisa retro", price: 100, tamanho: "M", category: "Camisa"},
    {name: "camisa softboy", price: 80, tamanho: "P", category: "Camisa"},
    {name: "Geladeira", price: 1500, tamanho: "4 portas", category: "Eletrodoméstico"},
    {name: "Fogão", price: 1100, tamanho: "8 bocas", category: "Eletrodoméstico"}
]

const filter = products.filter(n => n.category === "Eletrodoméstico")
console.log(filter)

products.map((product) => {
    if(product.category === "Eletrodoméstico") {
        product.price = product.price - 200;
        product.sale = "PROMOÇÃO DO DIA"
    }

})

console.log(products)

console.log("TEMPLATE LITERALS")
const userName = "LUCAS"
const age = 17
console.log(`${userName}, você tem ${age} anos`)


console.log("DESTRUTUCTURING")
/** DESTRUCTURING
 * usado para desestruturae dados complexos em várias variáveis.
 * Pode ser usado em arrays e objetos
 * Permitindo criar várias variáveis em só uma linha
 */
const fruits = ["Maçã", "Mamão", "Laranja"]
const [f1, f2, f3] = fruits
console.log(f2, f3)

const productDetails = {
    nome: "Mouse",
    price: 39.99,
    category: "Periférico",
    color:"Cinza"
}

const{ nome: nome, price:preco, category:categoria, color:cor }  = productDetails
console.log(nome,preco,categoria,cor)

console.log("SPREAD OPERATOR")
/** SPREAD  OPERATOR
 * utilizado em arrays e objetos
 * possibilia inserir novos valores em um array ou objeto
 * também é possivel unir dois arrays
 */
const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1,...a2]
console.log(a3)

const a4 = [0,...a3,7]
console.log(a4)

const carName = {name: "Gol"}
const carBrand = {brand: "VW"}
const otherInfos = {km: 1000, price: 34000}

const car = {...carName,...carBrand,...otherInfos}
console.log(car)

console.log("CLASSES")
/**CLASSES
 * recursos fundamentais para programar orientado a objetos
 * tem recursos importantes como: constructor, proprieades e métodos
 */

class Product {
    constructor(name,price){
        this.name = name
        this.price = price
    }

    promocao(disconto){
        return this.price * ((100 - disconto)/100)
    }
}

const shirt = new Product("Camisa oversized", 276)
console.log(shirt)
console.log(shirt.promocao(25))

console.log("HERANÇA")
/** HERANÇA*/
class ProductWithAttributes extends Product {
    constructor(name,price, category){
        super(name,price)
        this.category = category
    }
    showCategory() {
        console.log("CATEGORIAS:")
        this.category.forEach((category) => {
            console.log(category)
        })
    }
}

const limpeza = new ProductWithAttributes("ALVEJANTE", 32, ["LIMPEZA", "HIGIENE", "SANITIZAÇÃO"])
console.log(limpeza)
console.log(limpeza.name)
console.log(limpeza.showCategory())