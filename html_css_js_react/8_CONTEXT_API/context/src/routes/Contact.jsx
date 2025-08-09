// 3 - alterando valor usando o contexto
//import { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext'

// 4 - refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext'

import Buttons from '../components/Buttons'


const Contact = () => {
  const {counter} = useCounterContext()

  return (
    <main>
      <h1>Contact</h1>
      <p>Valor do contador = {counter}</p>
    </main>
  )
}

export default Contact
