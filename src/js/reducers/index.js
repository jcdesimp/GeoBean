"use strict";

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import beanList from "./beanList";

export default combineReducers({
    beanList,
    routing: routerReducer
});
