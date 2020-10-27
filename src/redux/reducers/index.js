import {combineReducers} from "redux";
import filterReducer from "./filterReducer";
import drinkReducer from "./drinkReducer";

export default combineReducers({
    filterReducer,
    drinkReducer
})