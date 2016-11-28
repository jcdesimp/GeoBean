"use strict";

import {
        REQUEST_LOAD_BEANS,
        SUCCESS_LOAD_BEANS,
        FAIL_LOAD_BEANS,
        SELECT_BEAN
    } from "../actions/beanList";

const defaultState = {
    fetching: false,
    loadedBeanIndex: {},
    beanOrder: [],
    fetchError: null,
    filter: "",
    selectedBeanId: null
};



export default function handleAction(state = defaultState, action) {
    switch (action.type) {
    case REQUEST_LOAD_BEANS:
        return Object.assign({}, state, {
            fetching: true
        });
    case SUCCESS_LOAD_BEANS:
        return Object.assign({}, state, {
            fetching: false,
            loadedBeanIndex: action.beanIndex,
            beanOrder: Object.keys(action.beanIndex)
        });
    case FAIL_LOAD_BEANS:
        return Object.assign({}, state, {
            fetching: false,
            fetchError: action.error
        });
    case SELECT_BEAN:
        return Object.assign({}, state, {
            selectedBeanId: action.beanId
        });
    default:
        return state;
    }
}

