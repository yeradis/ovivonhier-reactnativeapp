import { GET_CATEGORIES, GET_CATEGORY } from './types';
import GetCategories from '../services/GetCategories';
import GetCategory from '../services/GetCategory'

export const getCategories = () => {
    return {
        type: GET_CATEGORIES,
        payload: new GetCategories().promise()
    }
}

export const getCategory = (category) => {
    console.log(category)
    return {
        type: GET_CATEGORY,
        payload: new GetCategory().promise(category)
    }
}