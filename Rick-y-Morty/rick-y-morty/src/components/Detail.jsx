import "../hojas-de-estilo/Detail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Detail = () => {
  const {detailId} = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api"
    const KEY = "be8639d64f59.a46c9d8652407781dbe3"
  
    axios(`${URL_BASE}/character/${detailId}?key=${KEY}`)
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