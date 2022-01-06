const initialState = {
  currProductObj: {},
  userSignedIn: false,
  data: [],
  loading: true,
  tempUser: {
    cartItems: []
  },
  user: {
    orderDetails: [],
    cartItems: [],
    wishlistItems: [],
    address: {},
    details: {},
    detailsFetched: false,
    detailsUpdated: false,
  }
};

export default function rootReducer(state = initialState, actions) {
  switch (actions.type) {
    case "SET_DATA":
      return  {
        ...state,
        data: actions.payload
      }
    case "LOADING_COMPLETE":
      return {
        ...state,
        loading: false
      }
    case "SET_PRODUCT_OBJ":
      return {
        ...state,
        currProductObj: actions.payload,
      };
    case "RESET_OBJ":
      return state;
    case "SET_USER_DETAILS":
      return {
        ...state,
        user: {
          orderDetails: [...actions.payload.orders],
          cartItems: [...actions.payload.cart_items],
          wishlistItems: [...actions.payload.wishlist_items],
          address: actions.payload.address,
          details: actions.payload.details,
          detailsFetched: true,
          detailsUpdated: false,
        }
      };
    case "ADD_TO_CART_TEMP_USER":
      return {
        ...state,
        tempUser: {
          cartItems: [...state.cartItems, actions.payload],
        }
      };
    case "ADD_TO_CART_USER": 
      return {
        ...state,
        user: {
          ...state.user,
          cartItems: [...state.cartItems, actions.payload],
        }
      };
    case "SIGNED_IN":
      return {
        ...state,
        userSignedIn: true,
      };
    case "SIGNED_OUT":
      return {
        ...state,
        userSignedIn: false,
      };
    default:
      return state;
  }
}
