import {GET_CATEGORY, GET_CATEGORY_FULFILLED} from "../actions/types";

const initialState = {
    items: []
};

const categoryReducer = (state = [], action) => {
    console.log(action.type);
    switch(action.type) {
        case GET_CATEGORY, GET_CATEGORY_FULFILLED:
            return [...action.payload]
        default:
            return state;
    }
}

export default categoryReducer;