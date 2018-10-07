import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import nearbyPlacesReducer from './nearbyPlacesReducer';

export default combineReducers({
    categories: categoriesReducer,
    places: nearbyPlacesReducer
});
