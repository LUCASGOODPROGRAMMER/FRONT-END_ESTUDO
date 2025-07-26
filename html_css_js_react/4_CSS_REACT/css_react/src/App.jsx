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
      </div>
    </>
  )
}

export default App
