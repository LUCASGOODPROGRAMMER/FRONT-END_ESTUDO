// 3 - alterando valor usando o contexto
//import { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext'

// 4 - refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext'


// 5 - contexto mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'

import Buttons from '../components/Buttons'


const Contact = () => {
  const {counter} = useCounterContext()

  const {color} = useTitleColorContext()

  return (
    <main>
      <h1 style={{color:color}}>Contact</h1>
      <p>Valor do contador = {counter}</p>
    </main>
  )
}

export default Contact
