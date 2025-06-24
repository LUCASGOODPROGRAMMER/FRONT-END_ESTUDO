// 1 - strict
"use strict";

// opa = "teste" vai retornar erro por conta do modo strict

const opa = "teste"

// const undefined = 10 vai retornar que undefined já foi declarado, ou seja, pelo próprio js

// delete [].length; vai retornar um erro, não posso deletar a propriedade length do object array

// 2 - método de debug
let a = 1
let b = 2

if(a == 1) {
    a = b + 2;
}

console.log(a)

for(let i = 0; i < b; i++){
    a = a + 2
    console.log(`°${i}: ${a}`)
}

if(a > 5) {
    a = 25
}

console.log(a)

// 3 - Método debug:debugger
// com o debugger posso fazer o programa pausar em determinadas linhas
// útil para entender o que está acontecendo no código

let c = 2
let d = 5

// debugger

if(c == 2){
    c = d + 1
}

console.log(c)

// debugger

for(let i = 0; i < d; i++){
    c = c + 3
}

console.log(c)

// debugger

if(c > 5){
    c = 25
}

// 4 - tratamento de dados
function checkNumber(numero){
    const result = Number(numero) // estou convertento qualquer tipo de dado para number

    if(Number.isNaN(result)){
        console.log("isNaN")
        return
    } // estou verificando se o numero não é um número

    console.log('isAN')
    return result
}

checkNumber(5)
checkNumber("20")
checkNumber({})
checkNumber("test45")

// 5 - exceptions
// erros que o próprio desenvolvedor gera
// faz o programa parar a depuração
// expressão throw new Error

let x = 10

if(x === 10){
    // throw new Error("ERRO PROPOSITAL(throw new Error)")
}

// 6 - Try Catch
// um recurso onde executamos try, e se um erro ocorrer ele cai no bloco de catch
try {
    const soma = x + y
} catch(error) {
    console.log(`erro no programa: ${error}`)
}

// 7 - Finally
// instrução realizada depois do bloco Try Catch
// executa independentemente ocorrencia de error
try{
    const value = checkNumber("10b")
    if(!value){
        throw new Error("Valor inválido")
    }
} 
catch(error){
    console.log(`ops, error: ${error}`)
}
finally{
    console.log("código depurado")
}

// 8 - Assertions
function checkArray(arr){
    if(arr.length === 0){
        throw new Error("Array vazio")
    } else{
        console.log(`o array tem ${arr.length} elemento(s)`)
    }
}
// checkArray([])
checkArray([1, 2, 3, 4, 5])
