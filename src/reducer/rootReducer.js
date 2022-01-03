
const initialState = {
    currProductObj : {},
    cartItems: [],
    userSignedIn: false,
};

export default function rootReducer(state = initialState, actions) {
    switch(actions.type){
        case "SET_PRODUCT_OBJ":
            return {
                ...state, 
                currProductObj: actions.payload
            }
        case "RESET_PRODUCT_OBJ":
            return state
        case "ADD_TO_CART":
            return {
                ...state,
                cartItems: [...state.cartItems, actions.payload]
            }
        case "SIGNED_IN":
            return {
                ...state,
                userSignedIn: true
            }
        case "SIGNED_OUT":
            return {
                ...state,
                userSignedIn: false
            }
        default:
            return state
    }
}