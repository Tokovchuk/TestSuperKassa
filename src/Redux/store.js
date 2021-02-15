import {combineReducers, createStore} from "redux";
import buttonReducer from "./Button-reducer";

const reducers = combineReducers({
    button: buttonReducer
});
const store = createStore(reducers);

export default store;

