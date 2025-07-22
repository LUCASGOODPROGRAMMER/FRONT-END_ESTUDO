import React from 'react'
import { useState } from 'react'

function Home() {

    const [homes, setHome] = useState([
        { id:1, endereco: "Copas Verde", tamanho: "Pequena" },
        { id:1, endereco: "Copas Verde", tamanho: "Pequena" },
        { id:1, endereco: "Copas Verde", tamanho: "Pequena" },
        { id:1, endereco: "Copas Verde", tamanho: "Pequena" },
        { id:1, endereco: "Copas Verde", tamanho: "Pequena" },
    ])

  return (
    <>
        <ol>
        {homes.map((home, i) => (
            <li key={home.id}>ID DA CASA:{home.id} - ENDEREÇO:{home.endereco} - TAMANHO:{home.tamanho}</li>
        ))}
      </ol>
    </>
  )
}

export default Home
