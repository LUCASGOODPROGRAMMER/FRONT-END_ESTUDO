// 3 - alterando valor usando o contexto
//import { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext'

// 4 - refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext'

import Buttons from '../components/Buttons'


const Home = () => {
  // const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()

  return (
    <main>
      <h1>Home</h1>
      <Buttons/>
      <p>Valor do contador = {counter}</p>
    </main>
  )
}

export default Home
