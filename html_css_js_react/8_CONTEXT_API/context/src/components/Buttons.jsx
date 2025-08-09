import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'


const Buttons = () => {
    const {counter,setCounter} = useContext(CounterContext)

  return (
    <>
    <button onClick={() => setCounter(counter +1 )}>aumentar</button>
    <button onClick={() => setCounter(counter -1 )}>diminuir</button>
    <button onClick={() => setCounter(counter * counter )}>elevar ao quadrado</button>
    </>
    
    
  )
}

export default Buttons