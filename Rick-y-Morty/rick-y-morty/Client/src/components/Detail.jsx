import "../hojas-de-estilo/Detail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Detail = () => {
  const {id} = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then((response) => setCharacter(response.data))
}, [])

  return (
  <div className="contenedor-detail">
    {
     character.name ? (
        <>
        <h2 className="nombre-detail">{character.name}</h2> 
        <p>{character.status}</p>
        <p>{character.species}</p>
        <p className={character.gender === "Male" ? "color-primary" : "color-secundary"}>{character.gender}</p>
        <p>{character.origin?.name}</p> 
        <img className = "img-detail" src ={character.image} alt = "img" /> 
        </>
     )
     : <h3>Loading...</h3>
    }
  </div>  
  );
}

export default Detail;