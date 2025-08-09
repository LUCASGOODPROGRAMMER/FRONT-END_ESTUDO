// 3 - alterando valor usando o contexto
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

import Buttons from '../components/Buttons'


const Home = () => {
  const {counter} = useContext(CounterContext)

  return (
    <main>
      <h1>Home</h1>
      <Buttons/>
      <p>Valor do contador = {counter}</p>
    </main>
  )
}

export default Home
