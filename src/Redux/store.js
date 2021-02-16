import {applyMiddleware, combineReducers, createStore} from "redux";
import buttonReducer from "./Button-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    button: buttonReducer
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

