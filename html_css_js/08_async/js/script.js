"strict";

// 1 - setTimeout
console.log("ainda não executou");
// setTimeout(function() {
//     console.log("exibiu após 4 segundos")
// }, 4000)
console.log("ainda não executou");

// 2 - setInterval
// setInterval(function() {
//     console.log("HORA DE DORMIR")
// }, 5000)

// let loop = setInterval(function(){
//     console.log("POP-UP")
// }, 1000)
// setTimeout(() =>{
//     clearInterval(loop)
//     console.log('pop-up bloqueados')
// }, 5000)

// 3 - Promises
// const promessa = Promise.resolve(5 + 5);

console.log("algum código");

// promessa
//   .then((value) => {
//     console.log(`soma promise = ${value}`);
//     return value;
//   }) // propriedade then usada para utilizar o valor da promessa
//   .then((value) => value - 1)
//   .then((value) => console.log(`agora é ${value}`));

console.log("outro código");

// 4 - falha na promise
// Promise.resolve(4 * "a")
//   .then((resultado) => {
//     if (Number.isNaN(resultado)) {
//       throw new Error("ALGO DE ERRADO NÃO ESTÁ CERTO");
//     }
//   })
//   .catch((error) => {
//     console.log(`inspencionando erro -> ${error}`);
//   })
//   .finally(() => {
//     console.log("CÓDIGO EXECUTADO");
//   });

//   5 - Rejeitando Promises
// function checkNumber(n){
//     return new Promise((resolve, reject) => {
//         if(n > 10){
//             resolve(`${n} é maior que 10`)
//         }
//         else {
//             reject(new Error(`número pequeno`))
//         }
//     })
// }
// const a = checkNumber(20)

// const b = checkNumber(10)

// a.then((v) => console.log(`o resultado é ${v}`)).catch((err) => console.log(`um erro ocorreu: ${err}`))

// b.then((v) => console.log(`o resultado é ${v}`)).catch((err) => console.log(`um erro ocorreu: ${err}`))

//  6 - rsolvendo varias promises
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve(10)
//     }, 1000)
// })

// const p2 = Promise.resolve(10 + 10)

// const p3 = new Promise((resolve, reject) => {
//     if(30 > 10){
//         resolve(30)
//     } else{
//         reject("Erro")
//     }
// })

// console.log(Promise.all([p1, p2, p3]))
// Promise.all([p1, p2, p3]).then((values) => console.log(values))

// // método all para executar todas as promessas
// // método then

// const p4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(50)
//     }, 3000)
// })

// Promise.all([p4]).then((values) => console.log(values))

// p4.then((values) => console.log(`o valor de p4 é ${values}`))

// 7 - async fynctions
// o async retorna uma promise automaticamente, evita ter de usar resolve e reject
// async function somarComDelay(a, b){
//     return a + b
// }
// somarComDelay(2, 4).then((values) => {
//     console.log(`o valor da soma é ${values}`)
// })
// console.log("testando o async ")

// 8 -instrução await
// guarda os resultados de uma async function
function delay() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("SHADERS CARREGADOS")
        }, 2000)
    })
}

async function chamadaAsync(){
    console.log("Chamando a Promise, e esperando o resultado")
    // const result = await delay()
    console.log("o resultado chegou: " + await delay())
}

chamadaAsync() 

//  generators
// é possivel pausar ações e inicializalas depois

function* generator() {
    yield 'primeiro'
    yield 'segundo'
}

const gen = generator()
console.log(gen.next().value)
console.log(gen.next().value) // o next abre a caixa e propriedade value puxa o valor




