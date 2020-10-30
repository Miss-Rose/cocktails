import {
    GET_FILTERS_FULFILLED,
    GET_FILTERS_PENDING,
    GET_FILTERS_REJECTED,
} from "../actionTypes/types";

const initialState = {
    categories: [],
    loading: false,
    error: false
}

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_FILTERS_PENDING: return {...state, loading: true};
        case GET_FILTERS_FULFILLED: return {...state,
                loading: false,
                categories: Object.entries(payload.drinks)
                    .map((item, index) => {
                        return {
                            id: index,
                            name:  item[1]['strCategory'],
                            checked: false
                        }

                    })};
        case GET_FILTERS_REJECTED: return {...state, error: true};
        default:
            return state;
    }
}