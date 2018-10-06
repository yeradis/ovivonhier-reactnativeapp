import {GET_CATEGORIES, GET_CATEGORIES_FULFILLED} from "../actions/types";

const categoriesReducer = (state = [], action) => {
    switch(action.type) {
        case GET_CATEGORIES, GET_CATEGORIES_FULFILLED:
            return [...action.payload]
        default:
            return state;
    }
}

export default categoriesReducer;