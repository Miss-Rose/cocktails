import {
    ADD_DRINKS_FULFILLED,
    ADD_DRINKS_PENDING,
    ADD_DRINKS_REJECTED
} from "../actionTypes/types";

const initialState = {
    drinks: [],
    loading: false,
    error: false
}

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_DRINKS_PENDING: return {...state, loading: true};
        case ADD_DRINKS_FULFILLED:
            return {
            ...state,
            loading: false,
            drinks: [...state.drinks, payload],
            };
        case ADD_DRINKS_REJECTED: return {...state, error: true};
        default:
            return state;
    }
}