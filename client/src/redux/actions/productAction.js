import axios from "axios"

import * as actionTypes from '../constants/productConstant'

const URL = 'http://localhost:8000';

//using middleware thunk for dispatching the data 
export const getProducts = () => async (dispatch) => {
    try {
        const { data } =await axios.get(`${URL}/products`);
        // console.log(data);
 
        //  dispatch functions calls UseReducer internally 
        //"type" tells about success,failure,hold of the request so we can differentiate it in Reducer file
        // 
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });


    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message })
    }
}

