import axios from "axios"; 
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFavorite = (character) => {
    //return { type: ADD_FAVORITE, payload: character}
    const endpoint = "http://localhost:3001/rickandmorty/fav";
    return (dispatch) => {
        axios.post(endpoint, character) //character es el obj que recibe por body mi server
        .then(({ data }) => {
            return dispatch({
                type: ADD_FAVORITE,
                payload: data,
            });
        });
    }
}; 

export const removeFavorites = (id) => {
    //return { type: REMOVE_FAVORITES, payload: id}
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
    return (dispatch) => {
        axios.delete(endpoint) //character es el obj que recibe por body mi server
        .then(({ data }) => {
            return dispatch({
                type: REMOVE_FAVORITES,
                payload: data,
            });
        });
    }
}; 

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender };
  };
  
  // orderCards: recibe un order como argumento y devuelve un objeto con dos propiedades: type establecida en la const ORDER y payload establecida en el order recibido como argumento. Esta función se utiliza para ordenar los personajes.
  export const orderCards = (order) => {
    return { type: ORDER, payload: order };
  };