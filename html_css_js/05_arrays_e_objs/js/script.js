// arrays
/*
const lista = [1, 2, 3, 4, 5]; //lista com dados numéricos, lista do tipo object
console.log(lista);
console.log(typeof lista);

const itens = [1, "2", "a", 1.5, null, true];
console.log(itens);

// propriedades
const numbers = [1, 3, 5];
console.log(numbers.length);
console.log(numbers["length"]);

const myName = "lucas";
console.log(myName.length);

console.log(lista[0]);

// métodos
const otherNumbers = [2, 3, 4];

const allNumbers = numbers.concat(otherNumbers);
console.log(allNumbers); // método concat, usado para concatenar arrays

const text = "uppercase";
console.log(text.toLocaleUpperCase());
console.log(text.toLocaleLowerCase()); // método usado para respeitar propriedades internacionais
console.log(text.toLowerCase()); // método para apenas deixar no formato minusculo

console.log(typeof text.toLocaleUpperCase); // métodos são funções

console.log(text.indexOf("p")); //indexOf método para caçar o index do valor, em qual posição ele esta

// Objetos (Objects Literals)
const person = {
  name: "Lucas",
  age: 31,
  job: "Programador júnior",
};

console.log(person);
console.log(person.name.toUpperCase()); // (objeto.propriedade.método)
console.log(person.age);
console.log(person.job);
// criando e deletando propriedades
const loja = {
    nome: "mercado",
    tipo: "mercado",
    tamanho: "grande"
}

console.log(loja)
console.log(loja, loja.doors = 8)

delete loja.doors

console.log(loja)

// mais sobre objetos

const objeto = {
    a: "testando",
    b: true
}

console.log(objeto instanceof Object) // usado para verificar se o objeto é filho de uma classe

const obj2 = {
    c: []
}

Object.assign(obj2, objeto) //destino e fonte

console.log(obj2.a)

// conhecendo os objetos
console.log(Object.keys(objeto))
console.log(Object.keys(obj2)) //usado para ver as keys de um objeto, propriedades no caso
console.log(Object.entries(obj2)) //acha as keys, o tipo, o valor e a posição

// mutação (Mutability)
const b = {
    name: 'lucas'
}

const a = b // ao definir um variavel igual um objeto, ambos serão influenciado pelos comandos aplicado a variavel ou objeto
// ele não cria uma cópia mas sim uma referência, um atalho para modificar o objeto b

console.log(a)
console.log(b)
console.log(a === b)
console.log(b === a)

b.age = 17
console.log(b)
console.log(a)

delete a.age

console.log(b)
console.log(a)


// Loops em arrays
const usuarios = ['lucas', 'keynner', 'einstein', 'kaylla', 'tainá']

for(let i = 0; i < usuarios.length; i++) //length conta quantas posições tem o array, ou valores, ou caracteres. depende do tipo da variável
{
    console.log(`usuário n°${i + 1} ${usuarios[i]} na posição ${i}`)
}

// Métodos de array:push e pop
// push usado para adicionar algo no fim do array
// pop remove um elemento no fim do array

const pushPop = ['a','b','c']
console.log(pushPop)
pushPop.push('d','e')
console.log(pushPop)
pushPop.pop()
console.log(pushPop)
const itemsPop = pushPop.pop()
console.log(itemsPop)
console.log(pushPop)

// métodos de array:shift and unshift
// shift remove o primeiro elemento do array
// unshift adiciona itens no inicio do array

const init = [1, 2, 3, 4, 5]
console.log(init)

const remoção = init.shift()
init.unshift(6)

console.log(init)

// métodos do array:indexOf and lastIndexOf
// o indexOf serve para identificar o indice de um elemento ou seja a posição
// lastIndexOf usado para identificar o indíce da ultima ocorrencia de um elemento duplicado
// quando um elemento do array não é encontrado, é retornado -1, fora da  caixa de index ou seja talvez não exista.
const string = 'baralho'
console.log(string.indexOf('o'))
console.log(string.lastIndexOf('a'))

const frutas = ['banana', 'maçã', 'laranja', 'tangerina', 'banana', 'uva']
console.log(frutas.indexOf('laranja'))
console.log(frutas.lastIndexOf('banana'))
console.log(`${frutas[frutas.lastIndexOf('banana')]}, se encontra no indice [${frutas.lastIndexOf('banana')}]`)

// método do array:include
// include retorna um valor do tipo boolean, se o elemento existir retornará true
console.log(`tangerina se encontra no array? ${frutas.includes('tangerina')}. está no indice [${frutas.indexOf('tangerina')}]`)

// métod array: slice
// utilizado para extrair um array menor de um array maior
// o ultimo elemento é ignorado, ele vai até o penultimo por padrão
// por exemplo se eu definir o fim como indice 4, ele vai pegar só os indices até 3
// se eu só colocar o indice de start ele vai pegar todos elementos apartir do indice de start
const arrayMaior = ['1', '2', '3', '4', '5', '6']
console.log(arrayMaior)
const arrayMenor = arrayMaior.slice(0, 4)
console.log(arrayMenor)
console.log(arrayMaior)
const arrayApartir = arrayMaior.slice(2)
console.log(arrayApartir)

// método do array: forEach
// ele percorre cada um dos elementos de um array
// bom para percorrer todo o array

const numeros= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numeros.forEach((numeros) => {
    console.log(`percorrendo o numero ${numeros} com forEach`)
})

const letras = ['a', 'b', 'c', 'd', 'f', 'g']
letras.forEach((letra) => {
    console.log(`alfabeto, letra: ${letra}`)
})

const bdSimulado = [
    { linguagem: 'java script', category: 'front-end'},
    { linguagem: 'html', category: 'front-end'},
    { linguagem: 'css', category: 'front-end'},
    { linguagem: 'c#', category: 'back-end'},
    { linguagem: 'c++', category: 'back-end'}
]

bdSimulado.forEach((chamaBd) => {
    console.log(`linguagem = ${chamaBd.linguagem}, categoria = ${chamaBd.category}`)
})

// método do array: reverse
// ele modifica o array original
// inverte a ordem dos array

const normal = [1, 2, 3, 4, 5, 6]
console.log(normal)
const inverso = normal.reverse()
console.log(`array inverso ${inverso}`)
console.log(`array normal afetado pela ref${normal}`) // ele foi invertido pq foi afetado pela referencia

// métodos string 
// string tambem é um objeto, tem métodos e propriedades

// método string trim
// remove os espaço no inicio e no fim da string
// sanitização de dados
// método não modifica texto original
const maskarado = '   lucas'

console.log(`objeto sujo:${maskarado}\nobjeto limpo:${maskarado.trim()}`)
console.log(maskarado.trim().length)

// métodos de string: padStart e padEnd(inicio de bloco e fim de bloco)
const inicio = 'HOMEM ESTAVA SÓBRIO'
console.log(inicio)
console.log(inicio.padStart([inicio.length + 2], 'O '))
console.log(inicio.padEnd([inicio.length + 2], ' O'))


// métodos string: split
// ele divide a string em arrays
// no split devo colocar o elemento separador, por exmplo ele vai usar o espaço, algum caracter como base de seperamento
const inteiro = "banana";
console.log(inteiro);

const arrayzado = inteiro.split("");
console.log(arrayzado);

arrayzado.forEach((tudo) => {
  console.log(tudo);
});
console.log(inteiro);

const frase = "agua mole pedra dura tanto bate que até fura";
console.log(frase)

const palavras = frase.split(' ')
console.log(palavras)

const cpf = '000.000.000-42'
console.log(cpf)

const cpfLimpo = cpf.split(/[.-]/) // regex para adicionar mais um parametro de separação
console.log(cpfLimpo)

// métodos string: join
const juntaArrays = palavras.join(' ')
console.log(juntaArrays)

const menu = ['hamburgue', 'x-tudo', 'x-salada', 'cachorro quente']
const pedido = `quero comer: ${menu.join(', ')}`
console.log(pedido)

// método string: repeat
const alert = 'ele está próximo '
console.log(alert.repeat(4))

*/