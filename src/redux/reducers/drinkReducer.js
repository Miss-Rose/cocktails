import {
    GET_DRINKS_FULFILLED,
    GET_DRINKS_PENDING,
    GET_DRINKS_REJECTED
} from "../actionTypes/types";

const initialState = {
    drinks: [],
    loading: false,
    error: false
}

export default (state = initialState, action) => {

    const {type, payload} = action;
    switch (type) {
        case GET_DRINKS_PENDING: return {...state, loading: true};
        case GET_DRINKS_FULFILLED: return {...state, loading: false, drinks: payload.drinks};
        case GET_DRINKS_REJECTED: return {...state, error: true};
        default:
            return state;
    }
}