import './App.css'

import { Outlet } from 'react-router-dom'

// 5 - link entre página
import NavBar from './components/NavBar'

// search paramns
import SearchForm from './components/SearchForm'

function App() {


  return (
    <>
      <div>
        <NavBar/>
        <SearchForm/>
        <Outlet />
      </div>
    </>
  )
}

export default App
