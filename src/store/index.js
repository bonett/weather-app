import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { city } from './../reducers/city';

// Estado inicial de la aplicacion
const initialState = {
    city: 'Barranquilla,col'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// creo el store
export const store = createStore(city, initialState, composeEnhancers(applyMiddleware(thunk)));