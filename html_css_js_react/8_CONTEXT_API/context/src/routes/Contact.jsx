// 3 - alterando valor usando o contexto
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

import Buttons from '../components/Buttons'


const Contact = () => {
  const {counter} = useContext(CounterContext)

  return (
    <main>
      <h1>Contact</h1>
      <p>Valor do contador = {counter}</p>
    </main>
  )
}

export default Contact
