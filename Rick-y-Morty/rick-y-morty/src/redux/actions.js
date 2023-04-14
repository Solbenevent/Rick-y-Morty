export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";

export const addFavorite = (character) => {
    return { type: ADD_FAVORITE, payload: character}
}; 

export const removeFavorites = (id) => {
    return { type: REMOVE_FAVORITES, payload: id}
}; 