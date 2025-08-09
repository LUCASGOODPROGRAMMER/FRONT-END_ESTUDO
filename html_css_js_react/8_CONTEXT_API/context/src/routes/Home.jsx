// 3 - alterando valor usando o contexto
//import { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext'

// 4 - refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext'

// 5 - contexto mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'

import Buttons from '../components/Buttons'


const Home = () => {
  // const {counter} = useContext(CounterContext)
  const { counter } = useCounterContext()

  const { color, dispatch} = useTitleColorContext()

  const setTitleColor = (color) => { dispatch({ type: color }) }

  return (
    <main>
      <h1 style={{ color: color }}>Home</h1>
      <Buttons />
      <p>Valor do contador = {counter}</p>
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </main>
  )
}

export default Home
