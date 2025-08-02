// usando Link um componente do react router dom usado para navegação entre páginas
// Link é uma substituição do <a href="...", diferen do <a> ele não causa recarregamento de página
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Home</Link> 
        <Link to="contact">Contact</Link>
    </nav>
  )
}

export default NavBar
