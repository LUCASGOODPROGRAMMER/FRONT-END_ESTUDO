import './App.css'

import { Outlet } from 'react-router-dom'

// 5 - link entre página
import NavBar from './components/NavBar'

function App() {


  return (
    <>
      <div>
        <NavBar/>
        <Outlet />
        <p>footer</p>
      </div>
    </>
  )
}

export default App
