// usando Link um componente do react router dom usado para navegação entre páginas
// Link é uma substituição do <a href="...", diferen do <a> ele não causa recarregamento de página
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link> 
        <Link to="contact">Contact</Link> */}
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contatos
      </NavLink>
    </nav>
  );
};

export default NavBar;
