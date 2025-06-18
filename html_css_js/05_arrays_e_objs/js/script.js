// arrays
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