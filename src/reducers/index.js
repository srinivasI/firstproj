import { combineReducers } from 'redux';
import posts from './PostReducer';
import products from './productReducer';

export default combineReducers({
    posts: posts,
    products:products
});