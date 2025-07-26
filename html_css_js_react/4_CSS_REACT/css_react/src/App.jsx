import { useState } from 'react'
import './App.css'

/** css de component */
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/** css global */}
        <h1>css no react</h1>

        {/** css de component */}
        <MyComponent/>
        <p>parágrafo afetado pelo css do componente</p>

        {/** inline style (prática inadequada para manutenção e legibilidade do código)*/}
        <p style={{color: "purple", fontWeight:"bold", backgroundColor:"black", borderRadius:"20px", placeSelf:"center", padding:"10px", margin:"10px"}}>Este elemento tem estilos inline</p>
      </div>
    </>
  )
}

export default App
