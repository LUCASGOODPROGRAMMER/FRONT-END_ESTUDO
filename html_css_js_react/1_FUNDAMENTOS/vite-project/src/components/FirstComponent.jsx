import MyComponent from "./MyComponent";

const Apresentacao = () => {
  return (
    <>
      <h2>Olá meu nome é LUCAS!</h2>
      <a href="">saiba mais</a>
      <MyComponent/>
    </> // abreviação simples de tag para evitar poluir o html com divs
  ); // para retornar objetos utiliza-se parenteses
};

export default Apresentacao; // exportando componente
