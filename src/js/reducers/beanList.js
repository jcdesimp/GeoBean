"use strict";

import { REQUEST_LOAD_BEANS, SUCCESS_LOAD_BEANS, FAIL_LOAD_BEANS } from "../actions/beanList";

const defaultState = {
    fetching: false,
    loadedBeanIndex: {},
    fetchError: null,
    filter: ""
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
            leadedBeanIndex: action.beanIndex
        });
    case FAIL_LOAD_BEANS:
        return Object.assign({}, state, {
            fetching: false,
            fetchError: action.error
        });
    default:
        return state;
    }
}

