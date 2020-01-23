import {applyMiddleware, createStore} from "redux";
import {combineReducers} from "redux";
import cart from "./reducers/cartReducer";
import settingsReducer from "./reducers/settingsReducer";
import thunk from "redux-thunk";
import shoppingReducer from "./reducers/shoppingReducer";
import logger from 'redux-logger';
// const middleware = applyMiddleware(thunk, logger);
const middleware = applyMiddleware(thunk);

const reducer = combineReducers({
  shopping: shoppingReducer,
  settings: settingsReducer,
  cart: cart,
});

export default createStore(reducer, middleware);