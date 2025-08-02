import './App.css'

import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
      <div>
        <p>navbar</p>
        <Outlet />
        <p>footer</p>
      </div>
    </>
  )
}

export default App
