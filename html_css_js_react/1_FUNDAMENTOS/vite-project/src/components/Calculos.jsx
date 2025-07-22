//template expression

function Calculos() {
  const name = "lucas";
  const age = "17";
  const skill = "react";

  const people = {
    name: "keynner",
    age: 18,
    skill: "JavaScript",
  }; //objeto

  const { name: nome, age: idade, skill: linguagem } = people; // destructuring, pego uma propriedade do objeto e apelido ela

  return (
    <>
      <p>a soma é {2 + 2}</p>
      <p>a vivisão é {2 / 2}</p>
      <p>a multiplicação é {2 * 2}</p>
      <h3>
        meu nome é {name}, tenho {age} anos e estou aprendendo {skill}
      </h3>
      <h4>
        meu amigo {nome} tem {idade} anos e estuda {linguagem}
      </h4>
    </>
  );
}

export default Calculos;
