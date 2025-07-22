// criando uma função
function minhaFuncao() {
  console.log("parabens");
}
minhaFuncao();

const minhaFuncaoEmVariavel = function () {
  console.log("Função em variável");
}; // recomendado a função com variavel quando quer evitar bugs de redeclaração

minhaFuncaoEmVariavel();

function funcaoComParametros(txt) {
  console.log(`imprimindo: ${txt}`);
}

funcaoComParametros("um arquivo de texto");
funcaoComParametros("um arquivo de pdf");

// return

const a = 20;
const b = 20;
const c = 30;
const d = 40;

function somaTodos() {
  return a + b + c + d;
}
somaTodos()

function somaDois(n1, n2) {
  return n1 + n2;
}
console.log(`${a} + ${b} = ${somaDois(a, b)}`);
console.log(`${c} + ${d} = ${somaDois(c, d)}`);
console.log(`100 + 100 = ${somaDois(100, 100)}`);

// o escopo global não interfere no escopo das funções
let global = 2;
function testEscopo() {
  global = 10;
  console.log(global);
}
console.log(global);
testEscopo();

// escopo aninhado
let m;
console.log(m);
function escopoAninhado() {
  m = 1;
  console.log(m);
  if (true) {
    m = 2;
    console.log(m);
    if (true) {
      m = 3;
      console.log(m);
    }

    console.log(m);
  }

  console.log(m);
}
escopoAninhado();

// principal  diferença do let e const para o var é que eles tem escopo aninhado

// Arrow function

const testArrow = () => {
  console.log("esta é uma Arrow function");
};
testArrow();

const parImpar = (n) => {
  if (n % 2 === 0) {
    console.log(`o número ${n} é par`);
    return;
  } else {
    if (n != undefined) {
      console.log(`o número ${n} é ímpar`);
      return;
    } else {
      console.log("PORFAVOR INSIRAR UM VALOR VÁLIDO");
    }
  }
};
parImpar(2);
parImpar(7);

// mais sobre Arrow functions
let x;
const normal = (x) => {
  return x * x;
};

console.log(`${normal(10)}`);

const encurtado = (x) => x + x;
console.log(encurtado(5));

/*
let arredondaPraBaixo = (n) => Math.ceil(n)
let arredondaPraCima = (n) => Math.floor(n)
let arredonda = (n) => {
    if(n < .5){return arredondaPraCima(n)}
    else{return arredondaPraBaixo(n)}
}
console.log(arredonda(2.4))
*/

// argumento opcionais

const multiplication = function (m, n) {
  if (n === undefined) {
    return m * 2;
  } else {
    return m * n;
  }
};

console.log(multiplication(5));
console.log(multiplication(5, 5));

const greeting = (name) => {
  if (!name) {
    console.log("Olá");
    return;
  }
  else{console.log(`seja bem vindo ${name}`);}
  
};
greeting("lucas");
greeting();

// valor default
const customGreeting = (name, greet = ": Olá caçador, seja bem vindo") => {
  return `${name} ${greet}!`;
};

console.log(customGreeting("Lucas"));
console.log(customGreeting("Lucas", "boa noite e até a próxima"));

const repeatText = (text = "pq você me ignora?", repeat = 2) => {
  for (let i = 0; i < repeat; i++) {
    console.log(text);
  }
};

repeatText("say my name skyler");
repeatText();
repeatText("pare", 5);

// Closure
function closureFunction() {
  let txt = "txt";

  function display() {
    console.log(txt);
  }

  display();
}

closureFunction();

// Closure
const operacoes = (n) => {
  return (m) => {
    return n * m;
  };
};

const c1 = operacoes(5);
const c2 = operacoes(2);

console.log(c1);
console.log(c2);
console.log(c1(20));
console.log(c2(40));

// Recursão
// uma função que se autoinvoca
const untilTen = (n, m) => {
  if (n <= 10) {
    console.log("made in haven");
  } else{
    const x = n - m
    
    console.log(x)

    untilTen(x, m)
  }
};
untilTen(30, 1)

/* function run
function run() {
console.log("ao infinito e além")
run();
}
*/

function factorial (x) {
  if(x === 0){
    return 1
  } else {
    return x * factorial(x - 1)
  }
}

const num = 10000 // quando valor for muito alto vai causar um stack overflow(estouro de pilha) ou maximum call stack size exceeded

console.log(`o fatorial do número ${num} é ${factorial(num)}`)

