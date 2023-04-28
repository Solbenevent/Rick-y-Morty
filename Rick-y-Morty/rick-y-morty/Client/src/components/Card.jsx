 import "../hojas-de-estilo/Card.css"
 import { Link } from "react-router-dom";
import { addFavorite, removeFavorites } from "../redux/actions";
import { connect } from "react-redux";
import { useState } from "react";

const Card = ({id,name, status, species, gender, origin, image, onClose, addFavorite, removeFavorites}) => {  
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
        setIsFav(false);
        removeFavorites(id);
      } else {
         setIsFav(true);
         addFavorite({id,name, status, species, gender, origin, image, onClose})
      }
   }

   return (
     <div className="card"> 
       {
        isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
       <button className = "btn-card" onClick={() => onClose(id)}>X</button>
       <Link to = {`/detail/${id}`}>
       <h2 className="nombres">{name}</h2>
       </Link>
       <h2>{species}</h2>
       <h2 className={gender === "Male" ? "color-primary" : "color-secundary"}>{gender}</h2>
       <h2>{origin}</h2>
       <div className="conteiner-p">
       <img className="card-img" src={image} alt='' /> 
       <p className="status">{status}</p>
       </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
     addFavorite: (character) => {
      dispatch(addFavorite(character)) //la action creator debe estar ejecutada pq necesitamos su valor de retorno(el obj que la fn retorna)
     },

     removeFavorites: (id) => {
      dispatch(removeFavorites(id))
     }
   };
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

