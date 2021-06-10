// import fakeData from "../../Fakedata/Fakedata";\
import FakeData from '../../FakeData/FakeData';
import { addToDatabaseCart,getDatabaseCart,removeFromDatabaseCart } from '../../FakeData/utilities/databaseManager';
import { DECREMENT, GET_CART_FROM_LOCALSTORAGE, INCREMENT, REMOVE_FROM_CART } from "../actions/type.js";
import { ADD_TO_CART } from "../actions/type.js";
const initialState = {
  cart: [],
  FakeData: FakeData,
 
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const sameProduct = state.cart.find((pd) => pd.key === action.payload.key)
      let count = 1;
      let newCart;
      if (sameProduct) {
        count = action.payload.quantity + 1;
        action.payload.quantity = count;
        const otherProduct = state.cart.filter(x => x.key !== action.payload.key)
        newCart = [...otherProduct, sameProduct]
      } else {
  
        action.payload.quentity = count;
        newCart = [...state.cart, action.payload]
      }
      addToDatabaseCart(action.payload.key, count)
     
      return {...state,cart:newCart};
    }

    case GET_CART_FROM_LOCALSTORAGE:{
      const saveCart = getDatabaseCart()
      const productKeys = Object.keys(saveCart)
      const previousCut = productKeys.map(pdkey => {
        const product = state.fakeData.find(x => x.key === pdkey)
        product.quantity = saveCart[pdkey]
  
        return product
      })

      return {...state,cart:previousCut};
    }
    case REMOVE_FROM_CART: {

      const newCart=state.cart.filter(pd=>pd.key !== action.payload)
      removeFromDatabaseCart( action.payload)
    
      return {...state,cart:newCart};
    }
    case INCREMENT: {
          
      const allProduct = [...state.cart]
      const productIndex = allProduct.findIndex((x) => x.key === action.payload)
      const product=allProduct[productIndex]
          
      product.quentity ++;
        
     allProduct.splice(productIndex, 1, product)
      
      return {...state,cart:allProduct};
    }
    case DECREMENT: {

     
      const allProduct = [...state.cart]
      const productIndex = allProduct.findIndex((x) => x.key === action.payload)
      const product=allProduct[productIndex]

      if(product.quantity>1){
         product.quantity --;
      }
          
     
        
     allProduct.splice(productIndex, 1, product)
      
      return {...state,cart:allProduct};
    }
 
    default: {
      return state;
    }
  }
};

export default cartReducer;