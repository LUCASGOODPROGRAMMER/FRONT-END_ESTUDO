import './App.css'

// imagem em assets
import dog from './assets/dog.jpg'

// useState
// import { useState } from 'react'
import Data from './components/Data'
import Sum from './components/Sum'
import ListRender from './components/ListRender'
import Home from './components/Home'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import HotelDetails from './components/HotelDetails'

function App() {

  return (
    <>
      <h1>avançando em react</h1>
      {/**acessandp imagem em public*/}
      <img src="/Guts.jpg" alt="Guts" /> {/**o / vai se comportar como se fosse a raiz do public */}
      <img src={dog} alt="dog" /> {/**template expression para acessar a imagem importada */}
      <Data/>
      <Sum/>
      <ListRender/>
      {/**testando */}
      <Home/>
      <ConditionalRender/>
      <ShowUserName name="lucas" estadoCivil="solteiro" pessoa="clt"/>
      <HotelDetails nome="crackolândia" endereco="rua22" tamanho={200} dono="lucas"/>
      <HotelDetails nome="PortHub" endereco="nuvem" tamanho={10000} dono="?"/>
      <HotelDetails nome="github" endereco="rua 27" tamanho={101111} dono="keynner"/>

    </>
  )
}

export default App
