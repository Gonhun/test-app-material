import {combineReducers} from 'redux';
import navbars from './navbar';
import orders from './order';
import autocomp from './autocomp';

export default combineReducers({
    navbars, orders, autocomp
})