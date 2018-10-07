import { GET_CATEGORIES, GET_NEARBY_PLACES } from './types';
import GetCategories from '../services/GetCategories';
import GetNearbyPlaces from '../services/GetNearbyPlaces';

export const getCategories = () => {
    return {
        type: GET_CATEGORIES,
        payload: new GetCategories().promise()
    };
};

export const getNearbyPlaces = (category, latitude, longitude) => {
    return {
        type: GET_NEARBY_PLACES,
        payload: new GetNearbyPlaces().promise(category, latitude, longitude)
    };
};
