import {getAllFilters, getDrinks} from "../../api/API";
import {GET_FILTERS, ADD_DRINKS} from "../actionTypes/types";

export const getFiltersCreators = () => ({
    type: GET_FILTERS,
    payload: getAllFilters(),
});

export const addDrinksCreators = (name) => {
    return {
        type: ADD_DRINKS,
        payload: getDrinks(name),
    }
};