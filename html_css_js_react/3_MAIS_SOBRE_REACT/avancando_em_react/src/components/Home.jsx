import React from "react";
import { useState } from "react";

function Home() {
  const [homes, setHome] = useState([
    { id: 1, endereco: "Copas Verde", tamanho: "Pequena" },
    { id: 2, endereco: "Copas Verde", tamanho: "Pequena" },
    { id: 3, endereco: "Copas Verde", tamanho: "Pequena" },
    { id: 4, endereco: "Copas Verde", tamanho: "Pequena" },
    { id: 5, endereco: "Copas Verde", tamanho: "Pequena" },
  ]);

  const deleteRandom = () => {
    // const randomNumber = Math.ceil(Math.random() * 5);

    // setHome((prevHome) => prevHome.filter((home) => randomNumber !== home.id));

    if(homes.length === 0) return

    const randomIndex = Math.floor(Math.random() * homes.length)
    const idToDelete = homes[randomIndex].id

    setHome((prevHome) => prevHome.filter((home) => home.id !== idToDelete))
  };

  return (
    <>
      <ol>
        {homes.map((home, i) => (
          <li key={home.id}>
            ID DA CASA:{home.id} - ENDEREÇO:{home.endereco} - TAMANHO:
            {home.tamanho}
          </li>
        ))}
      </ol>

      {/**previous state */}
      <button onClick={deleteRandom}>Excluir casa aleatória</button>
    </>
  );
}

export default Home;
