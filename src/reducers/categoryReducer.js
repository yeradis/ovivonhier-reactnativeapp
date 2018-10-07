import {
    GET_CATEGORY,
    GET_CATEGORY_FULFILLED
} from '../actions/types';

const categoryReducer = (state = [], action) => {
    switch (action.type) {
        case GET_CATEGORY:
        case GET_CATEGORY_FULFILLED:
            return [...action.payload];
        default:
            return state;
    }
};

export default categoryReducer;
