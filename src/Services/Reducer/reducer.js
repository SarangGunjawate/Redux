import {ADD_TO_CART} from '../constants'
const initialState = {
    cartData:[]
}

export default function cartitems(state=initialState, action){
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...StaticRange,
                cartData: action.data
            }
            break;
        default:
            return state
    }
}