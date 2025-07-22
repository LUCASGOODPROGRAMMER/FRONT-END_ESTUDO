import './App.css'

// imagem em assets
import dog from './assets/dog.jpg'

// useState
// import { useState } from 'react'
import Data from './components/Data'
import Sum from './components/Sum'

function App() {

  return (
    <>
      <h1>avançando em react</h1>
      {/**acessandp imagem em public*/}
      <img src="/Guts.jpg" alt="Guts" /> {/**o / vai se comportar como se fosse a raiz do public */}
      <img src={dog} alt="dog" /> {/**template expression para acessar a imagem importada */}
      <Data/>
      <Sum/>
    </>
  )
}

export default App
