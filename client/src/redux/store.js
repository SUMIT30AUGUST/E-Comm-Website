import {createStore, combineReducers,applyMiddleware} from 'redux';
//to pass the middleware in the dev tools,we have to use applymiddleware

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import {getProductsReducer} from './reducers/productreducer'


const reducer= combineReducers({
    getProducts : getProductsReducer
})

const middleware = [thunk];

//redux-thunk installed ,
//its a middleware , it comes to work in actions
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;