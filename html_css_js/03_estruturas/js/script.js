// variáveis
let nome = "lucas";
console.log(nome);

nome = "hubner";

console.log(nome);

const idade = 17;

console.log(idade);

// idade = 31 variável const não permite atribuir outro value

console.log(typeof nome);
console.log(typeof idade);

let cidade = "ji-paraná",
  estado = "rondônia";

const user = "lucas";
const User = "lucas";
console.log(user, User);

// simbolos permitidos para a criação de variável $ e _

// nomes reservados são aqueles usados pelo js

// estrutura de uma função
/* função é um bloco de código que pode ser reaproveitado ao longo do código*/

// Funções de JS:prompt
/*função prompt recebe um dado*/

// prompt
// const age = prompt("digite sua idade")
// console.log(`você tem ${age} anos`)

//Funções JS:alert
// alert("testando alert")

// const z = 10
// alert(`o número é ${z}`)

// Funções do JS:Math.x
/*
Math é um objeto que possui diversas funções
 max: encontra o maior número
 floor: arredonda para baixo o número;
*/
const decimal = 2.7;
console.log(Math.floor(decimal));
console.log(Math.ceil(decimal)); // arredonda para cima
console.log(Math.max(1, 7, 5));

//Funções de JS: console.x

console.error("dica:O erro está entre a tela e a cadeira!");

console.warn("já era mano");

// estruturas de controle

if (decimal == 2.8) {
  console.log(3);
} else {
  console.log(6);
}

// if
const m = 20;
if (m > 30) {
  console.log(true);
} else {
  console.log(false);
}

if (m > 10 && m > 20) {
  console.log(true);
} else {
  console.log(false);
}

// else if
if (1 > 2) {
  console.log("verdadeiro");
} else if (2 > 3) {
  console.log("verdadeiro");
} else if (2 > 1) {
  console.log("isooooooooo!");
}

//estruturas de repetição

let num = 1;

while (num < 11) {
  console.log(num);
  num = num + 1;
}

let nuns = 20;
do {
  console.log(`valor de ouro = ${nuns}`);
  nuns--;
} while (nuns > 0);

for (let t = 0; t <= 10; t++) {
  console.log(t);
}

let r = 10;
for (r; r >= 0; r--) {
  console.log(`diminuindo ${r}`);
}

// break
let s = 1;
while (true) {
  console.log(`numero ${s}`);
  s++;
  if (s > 10) {
    console.log("fim");
    break;
  }
}

let pares = 0;
for (pares; pares <= 30; pares++) {
  if (pares % 2 === 0) {
    console.log(`par:${pares}`);
  }
}
let impares = 0;
for (impares; impares <= 30; impares++) {
  if (impares % 2 !== 0) {
    console.log(`impares:${impares}`);
  }
}

//switch
const option = "buscar";
switch (option) {
  case "buscar":
    console.log("busca feita");
    break;
default:
    console.log("não achei")

}

// convenção de nomes de variáveis
/*
let programadorcadastrado (ruim)
let programador_cadastrado (aceitavel)
let ProgramadorCadastrado (aceitavel)
let programadorCadastrado (popular)*/



