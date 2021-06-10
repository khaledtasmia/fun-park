import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import cartReducer from "./reducers/CartReducer";

const middleware=applyMiddleware(thunk)

const combinedReducer = combineReducers({
    cart: cartReducer,
})

const store = createStore(combinedReducer, composeWithDevTools(middleware))
export default store;