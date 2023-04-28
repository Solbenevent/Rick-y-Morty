import { ADD_FAVORITE, REMOVE_FAVORITES, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharactersFav: [],
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ADD_FAVORITE:
            return {...state, 
                myFavorites: payload,
                allCharactersFav: payload
            };

        case REMOVE_FAVORITES:
            return {...state, 
                myFavorites: payload
            };

            case FILTER:
      const allCharactersFiltered = state.allCharactersFav.filter(
        // Si el género del personaje coincide con el valor del payload, se incluirá en el nuevo array filtrado.
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites:
          payload === "allCharacters" // Si el payload es "allCharacters", devuelve todos; de lo contrario, solo los personajes del género especificado en el payload.
            ? [...state.allCharactersFav]
            : allCharactersFiltered,
      };

    // Ordena los personajes por ID.
    case ORDER:
      const allCharactersFavCopy = [...state.allCharactersFav];
      return {
        ...state,
        myFavorites:
          payload === "A" // Si el payload es "A", se ordenan en orden ascendente; de lo contrario, se ordenan en orden descendente.
            ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
            : allCharactersFavCopy.sort((a, b) => b.id - a.id),
      };

            default:
                return {...state}; 
    }
}

export default rootReducer; 