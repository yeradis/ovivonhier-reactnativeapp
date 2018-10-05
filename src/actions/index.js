import { GET_CATEGORIES } from './types';
import { GetCategories } from "@services/GetCategories";

export const getCategories = () => {
    return {
        type: GET_CATEGORIES,
        payload: new GetCategories().promise()
    }
}