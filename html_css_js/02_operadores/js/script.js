// Number
console.log(typeof 2); 
// typeof identifica o tipo de dado

// operações aritméticas
// operadores: + - * /
console.log(10 - 5 * 2 / 1)

// special numbers
/*
infinity; valor numérico especial que representa o infinito positivo
-infinity; valor numérico especial que representa o infinito negativo
NaN (not a number);
*/
console.log(typeof Infinity)//retorna number
console.log(typeof infinity)//retorna undefined, pois não existe um variável chamada infinity

console.log(typeof -Infinity)//number

console.log("12 * numero:" + 12 * "numero")//vai retornar NaN (não é um número)
console.log(typeof NaN)//recebo number, um número que não é numero?

// strings
console.log("string")
console.log('string')
console.log(`string`)
console.log("a" + 'b' + `c`)
console.log("2" + '2')
console.log('2' - '2')
console.log(-2 - `3`)
// console.log(cba)erro de referencia
console.log("quebrando\nlinhas")
console.log("\tdando um tab")

// concatenação
console.log("2" + "2")
console.log("25" + "vinte e cinco")


// interpolação, template Strings
console.log (`a soma de 20 + 20 = ${20 + 20}`)
console.log(`código interno ${console.log("testando")}`)

// Booleans
/*
> maior que
< menor que
== igual a
=== mesmo tipo e value
*/
console.log(true)
console.log(false)
console.log(Boolean)
console.log(typeof true)
console.log(typeof false)
console.log(5 > 20)//false
console.log(-5 > 1)//false
console.log(5 == 5)//true
console.log(5 === 5)//true
console.log(5 === "5")//false
console.log(0 == false)//true
console.log("" == false)//true
console.log([] == false)//true
console.log(typeof [])//object

// comparações
console.log(10 !== "10")

// operadores lógicos
/*
&& and
|| or
! not */
console.log(true && true)
console.log(true && false)
console.log(true || false)
console.log(true != false)
console.log(!false)
console.log(!5 > 2)

// Empty Values
/* 
undefined
null 
*/
console.log(typeof null, typeof undefined)

console.log(null === undefined, null == undefined) //não são identicos, mas são iguais

console.log(null == false) //false

console.log(null == true) //false

// Conversão de tipo automáticos
console.log(5*null)
console.log("A" * "B")
console.log("10" + 1)
console.log("10" - 1)