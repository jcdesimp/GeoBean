"use strict"

import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from './components/devTools/devTools';

import reducer from './reducers';

let enhancements = [  ];
process.env.NODE_ENV === 'production' ? null : enhancements.push(DevTools.instrument());


const enhancer = compose(
  ...enhancements
);


let store = createStore(
    reducer,
    enhancer
);

export default store;
