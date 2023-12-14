import api from '../rootApi';

export const fetchProducts = async (dispatch) => {
    try {
        const res = await api.get('products');
        dispatch({ type: 'GET_ALL_PRODUCTS', products: res.data });
    } catch (error) {
        throw error;
    }
};

export const fetchSingleProduct = async (dispatch, id) => {
    try {
        const res = await api.get(`products/5`);
        dispatch({ type: 'GET_SINGLE_PRODUCT', singleProduct: res.data });
    } catch (error) {
        throw error;
    }
};


export const addToCart = async (dispatch, body) => {
    try {
        const res = await api.post('carts', body);
    } catch (error) {
        throw error;
    }
};

export const getUserCart = async (dispatch, id) => {
    try {
        const res = await api.get(`carts/user/${id}`);
        dispatch({ type: 'GET_USER_CART', userCart: res });
    } catch (error) {
        throw error;
    }
};