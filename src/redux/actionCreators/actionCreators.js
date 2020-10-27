import {getAllFilters, getDrinks} from "../../api/API";
import {GET_FILTERS, GET_DRINKS} from "../actionTypes/types";

export const getFiltersCreators = () =>({
    type: GET_FILTERS,
    payload: getAllFilters(),
});

export const getDrinksCreators = (name) =>({
    type: GET_DRINKS,
    payload: getDrinks(name),
});