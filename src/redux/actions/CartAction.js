import { ADD_TO_CART, DECREMENT, GET_CART_FROM_LOCALSTORAGE, INCREMENT, REMOVE_FROM_CART } from "./type.js"



export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }    
}


export const removeFromCart = (payload) => {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}
export const getDataFromLocalStorage = (payload) => {
    return {
        type: GET_CART_FROM_LOCALSTORAGE,
        payload
    }
}

export const Increment = (payload) => {
    return {
        type: INCREMENT,
        payload
    }
}

export const Decrement  = (payload) => {
    return {
        type: DECREMENT,
        payload
    }
}