import SearchBar from "../components/SearchBar";
import "../hojas-de-estilo/Nav.css";
import { Link, useNavigate } from "react-router-dom";


const Nav = ({onSearch, setAccess}) => {
  const navigate = useNavigate();
  
  const handleLogOut = () =>{
    setAccess(false);
    navigate("/");
}

    return (
  <div className="nav-contenedor">
    <SearchBar onSearch={onSearch} />
    <div className="contenedor-links">
    <Link className = "link-about" to = "/about"> <p>About</p></Link>
    <Link className="link-home" to ="/home"><p>Home</p></Link>
    <Link to = "/favorites"><p>Favorites</p></Link>
    </div>
    <button className="btn-logaout" onClick={handleLogOut}>LOG OUT</button>

  </div>
  );
}

export default Nav; 