import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'

function App() {


  return (
    <>
    <NavBar/>
    <main>
        
        <h1>Context API</h1> {/** usado para facilitar o compartilhamento de dados entre muitos componentes */}
        <Outlet/>
    </main>
    </>
  )
}

export default App
