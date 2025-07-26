import { useState } from "react";
import "./App.css";

/** css de component */
import MyComponent from "./components/MyComponent";

function App() {
  // css inline dinâmico
  const n = Math.round(Math.random() * 2);
  /**
   * Math.floor(4.7)     // 4 - Arredonda para baixo
   * Math.ceil(4.1)      // 5 - Arredonda para cima
   * Math.round(4.5)     // 5 - Arredonda para o inteiro mais próximo
   * Math.trunc(4.9)     // 4 - Remove a parte decimal
   * Math.min(5, 1, 9)   // 1 - Menor número
   * Math.max(5, 1, 9)   // 9 - Maior número
   * Math.pow(2, 3)      // 8 - 2 elevado a 3
   * Math.sqrt(9)        // 3 - Raiz quadrada de 9
   * Math.abs(-7)        // 7 - Retorna o valor positivo
   * Math.random();  // ex: 0.43824234
   * */

  // classes dinâmicas
  // const redTitle = Boolean(Math.round(Math.random() * 1));
  const redTitle = !!Math.round(Math.random()); // a dupla negação serve para converter para Boolean

  return (
    <>
      <div>
        {/** css global */}
        <h1>css no react</h1>

        {/** css de component */}
        <MyComponent />
        <p>parágrafo afetado pelo css do componente</p>

        {/** inline style (prática inadequada para manutenção e legibilidade do código)*/}
        <p
          style={{
            color: "purple",
            fontWeight: "bold",
            backgroundColor: "black",
            borderRadius: "20px",
            placeSelf: "center",
            padding: "10px",
            margin: "10px",
          }}
        >
          Este elemento tem estilos inline
        </p>

        {/** inline style dinâmico */}
        <h2 style={n > 1 ? { color: "magenta" } : { color: "purple" }}>
          CSS dinâmico
        </h2>

        {/** classes dinâmicas */}
        <h2 className={redTitle ? "red-title" : null}>Este título pode der uma classe dinâmica</h2>
      </div>
    </>
  );
}

export default App;
