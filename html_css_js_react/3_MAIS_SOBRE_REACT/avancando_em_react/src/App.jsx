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
import Fragment from './components/Fragment'
import Container from './components/Container'
import { Children } from 'react'

// renderização de listas com componentes
const hotels = [
  {id: 1, nome: "check mate", color:"cinza", advertencias: 2},
  {id: 2, nome: "hubhub", color:"branco", advertencias: 0},
  {id: 3, nome: "motel", color:"verde", advertencias: 5}
]

function App() {

  return (
    <>
      <h1>avançando em react</h1>
      {/**acessandp imagem em public*/}
      <img src="/Guts.jpg" alt="Guts" /> {/**o / vai se comportar como se fosse a raiz do public */}
      <img src={dog} alt="dog" /> {/**template expression para acessar a imagem importada */}
      {/**useState */}
      <Data/>
      <Sum/>
      {/**render de lista */}
      <ListRender/>
      {/**testando */}
      <Home/>
      {/**render condicional */}
      <ConditionalRender/>
      {/**props */}
      <ShowUserName name="lucas" estadoCivil="solteiro" pessoa="clt"/>
      {/**desestruturando props */}
      <HotelDetails nome="crackolândia" endereco="rua22" tamanho={200} dono="lucas"/>
      {/**reaproveitando componentes */}
      <HotelDetails nome="PortHub" endereco="nuvem" tamanho={10000} dono="?"/>
      <HotelDetails nome="github" endereco="rua 27" tamanho={101111} dono="keynner"/>
      {/**renderização de lista com componente */}

      {hotels.map((hotel) => (
        <HotelDetails key={hotel.id} nome={hotel.nome} endereco={hotel.color} tamanho={hotel.advertencias}/>
      ))}

      <Fragment/>

      {/**children */}
      <Container>
        <p>alguma coisa</p>
      </Container>
      <Container>
        <div>
          <h2>testando</h2>
          <p>Meu Container</p>
        </div>
      </Container>
    </>
  )
}

export default App
