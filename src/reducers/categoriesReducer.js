import {GET_CATEGORIES, GET_CATEGORIES_FULFILLED} from "../actions/types";

const initialState = {
    categories: []
};

const categoriesReducer = (state = [], action) => {
    console.log(action.type);
    switch(action.type) {
        case GET_CATEGORIES, GET_CATEGORIES_FULFILLED:
            return [...action.payload]
        default:
            return state;
    }
}

export default categoriesReducer;