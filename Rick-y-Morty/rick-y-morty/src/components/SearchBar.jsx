 import { useState } from "react";
import "../hojas-de-estilo/SearchBar.css";

const SearchBar = ({onSearch}) => {
  const [id, setId] = useState("");
  const handleChange = (event) =>{
   setId(event.target.value);
  }

   return (
      <div className="contenedor-search">
          <input className="search-input" type='search' placeholder = "Introduce un ID" onChange={handleChange} />
         <button className="search-btn" onClick={() => {onSearch(id); setId("")}}>Agregar</button> 
      </div>
   );
}

export default SearchBar;