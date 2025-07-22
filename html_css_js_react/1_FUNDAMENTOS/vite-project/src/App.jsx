///JSX é o hmlt do react
// import { useState } from 'react' // criar e controlar estado local
import "./App.css";

// 2 - importando componente
import Apresentacao from "./components/FirstComponent"; // import <nome da importação> from <"local que deve ser buscado">

// 4 - Template expression
import Calculos from "./components/calculos";

// 5 - importando MyComponent
import MyComponent from "./components/MyComponent";

// 6 - eventos
import Events from "./components/Events"

function App() {
  // 3 - comentários
  return (
    <>
    {/**comentário JSX */}
      <p>apresentation</p>
      <Apresentacao /> {/**usando componente importado */}
      <Calculos/> {/**usando o componente Calculos importado */}
      <Events/>
    </>
  );
}

export default App;
