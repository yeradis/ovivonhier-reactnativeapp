import {
    GET_NEARBY_PLACES,
    GET_NEARBY_PLACES_FULFILLED
} from '../actions/types';

const nearbyPlacesReducer = (state = [], action) => {
    switch (action.type) {
        case GET_NEARBY_PLACES:
        case GET_NEARBY_PLACES_FULFILLED:
            return [...action.payload];
        default:
            return state;
    }
};

export default nearbyPlacesReducer;
