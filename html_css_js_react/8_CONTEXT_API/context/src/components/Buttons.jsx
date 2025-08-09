//import { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext'
import { useCounterContext } from "../hooks/useCounterContext"


const Buttons = () => {
    const {counter,setCounter} = useCounterContext()

  return (
    <>
    <button onClick={() => setCounter(counter +1 )}>aumentar</button>
    <button onClick={() => setCounter(counter -1 )}>diminuir</button>
    <button onClick={() => setCounter(counter * counter )}>elevar ao quadrado</button>
    </>
    
    
  )
}

export default Buttons