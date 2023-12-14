export const initialState = {
    products: [],
    singleProduct: [],
    addToCart: false,
    updateCartCount: 0,
    userCart: [],
    userLoggedIn: JSON.parse(localStorage.getItem("store_user")) || null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                products: action.products
            }
        case 'GET_SINGLE_PRODUCT':
            return {
                ...state,
                singleProduct: action.singleProduct
            }
        case 'RESTORE_SINGLE_PRODUCT':
            return {
                ...state,
                singleProduct: []
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                addToCart: true,
                updateCartCount: state.updateCartCount + 1,

            }
        case 'GET_USER_CART':
            return {
                ...state,
                userCart: action.userCart
            }
        case "LOGIN": {
            localStorage.setItem("store_user", JSON.stringify(action.userLoggedIn));
            return {
                ...state,
                userLoggedIn: action.userLoggedIn,
            };
        }
        case "LOGOUT": {
            localStorage.removeItem("store_user");
            return {
                ...state,
                userLoggedIn: null,
            };
        }
        default:
            return state;
    }
}

export default reducer;