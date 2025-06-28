// protocolos da web
// protocolo é uma forma de comunicação entre computadores
// http serve para solicitar imagens e arquivos do servidor(Hyper Text Transfer Protocol)
// SMTP: protocolo para envio de email
// TCP: protocolo para transferência de dados

// Mais sobre URL
// URL(Uniform resouce Locator) se divide em três partes
// por exemplo: https://horadecodar.com.br/index.html
// https é o protocolo, horadecodar.com.br é o domínio, que referencia um servidor(DNS > IP)
// index.html é o que estamos acessando

// HTML E JAVA SCRIPT
// algumas tags tem atributos que podem executar js
// quando tem um link entre um arquivo e outro, uma chamada http é executada
// java script pode ser utilizado para manipular o html e alterar estilos

// HTML E O DOM(Document Object Model)
// DOM é uma representação fiel do HTML da página
// utilizado para acessar o html através de js
// podemos modificálo utilizando métodos e propriedades dos objetos que alteram o DOM
// através dele é possível atrelar eventos ao html

// o DOM pode modificar completamente uma página
// dá para alterar elementos, atributos e estilizaçãoa
// adicionar e remover elementos
// o DOm cria uma árvore html, os elementos são chamados de nós

// 1 - movendo se pelo DOM
console.log(document.body)
console.log(document.footer)
console.log(document.header)

// forma de seleção pode ser também pro classe, id, seletor de css;
// getElementByTagName, getElementById, querySelector;

// 2 - getElementsByTagName
// 3 - getElementById
// 4 - getElementsByClassName
const tag = document.getElementsByTagName('li')
const id = document.getElementById('main-container')
const className = document.getElementsByClassName('contato')

console.log(tag)
console.log(id)
console.log(className)

// querySelector
const allElements = document.querySelectorAll('.contato')
console.log(allElements)

const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)

// alterando o html pelo DOM
// insertBefore, appendChild, replaceChild
// insertBefore cria um elemento antes de outro elemento
// é necessário criar elemento js, usando createElement
// appendChild() um método que cria elementos filhos
const p = document.createElement('p') // criei o elemento p


// 6 - insert before
const header = title.parentElement
console.log(header)

// header.insertBefore(p, title)

// 7 - appendChild
const navLink = document.querySelector('nav ul')
const li = document.createElement('li')

navLink.appendChild(li)

// 8 - replaceChild
const h2 = document.createElement("h2")

h2.textContent = "SITE WEBZADO"
header.replaceChild(h2, title)

// const footer = direitos.parentElement

// setTimeout(function () {
//     p.textContent = "DIREITOS RESERVADOS PARA O LUCAS"
//     footer.replaceChild(p, direitos)
// }, 3000)

// 9 criando nós de texto
// createTextNode
const myText = document.createTextNode("SITE WEB 2")
console.log(myText)

const h3 = document.createElement("h3")
h3.appendChild(myText)
console.log(h3)
mainContainer.appendChild(h3)

// trabalhando com atributos
// getAttribute
// setAttribute
const firstLink = navLink.querySelector("a")

console.log(firstLink)

// usando setAtribute posso alterar os atributos
firstLink.setAttribute("href" , "https://pt.wikipedia.org/wiki/Casa") //atributo e o valor

console.log(firstLink.getAttribute("href"))

const footer = document.querySelector("footer")
console.log(footer.offsetHeight, footer.offsetWidth)
if(footer.offsetWidth > 1000){
    const message = document.createElement("span")
    message.textContent = "TELA MAIOR QUE 1000PX"
    console.log(message)
    mainContainer.appendChild(message)
} else {
    const message = document.createElement("span")
    message.textContent = "TELA MENOR QUE 1000PX"
    console.log(message)
    mainContainer.appendChild(message)
}

console.log(footer.clientHeight) // essa propriedade desconta as bordas internas
console.log(footer.clientWidth)

const contatos = document.getElementsByClassName("contato")
// 12 - posicao do elemento
const contato1 = contatos[0]
console.log(contato1.getBoundingClientRect())

// 13 - CSS com JS
document.body.style.backgroundColor = "#87F5C7"
document.body.style.padding = "10px"
document.body.style.fontSize = "2em"

// 14 - alterando estilos de varios elementos
for(const li of tag){
    li.style.backgroundColor = 'blue'
}