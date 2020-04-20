import { createStore } from 'redux';
import { city } from './../reducers/city';

// Estado inicial de la aplicacion
const initialState = {
    city: 'Barranquilla,col'
};

// creo el store
export const store = createStore(city, initialState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());