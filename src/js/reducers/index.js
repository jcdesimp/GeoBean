"use strict";

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import sideList from "./sideList";

export default combineReducers({
    sideList,
    routing: routerReducer
});
