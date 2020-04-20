import { SET_CITY } from './../actions';

// reducer una funcion que recibe un estado y una accion y retorna un estado que es inmutable
export const city = (state, action) => {

    // pregunto si sobre un action
    switch (action.type) {
        case SET_CITY:
            // retorna un nuevo estado con el valor, action.value
            return { ...state, city: action.value }
        default:
            return state;
    }
}