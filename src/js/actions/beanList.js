"use strict";

import { loadBeans } from '../lib/api';

export const REQUEST_LOAD_BEANS = "REQUEST_LOAD_BEANS";
export const SUCCESS_LOAD_BEANS = "SUCCESS_LOAD_BEANS";
export const FAIL_LOAD_BEANS = "FAIL_LOAD_BEANS";
export const SELECT_BEAN = "SELECT_BEAN";

function failLoadBeans(err) {
    return {
        type: FAIL_LOAD_BEANS,
        error: err
    };
}

function successLoadBeans(beans) {
    let beanIndex = {};
    for(let i = 0; i < beans.length; i++) {
        beanIndex[beans[i].id] = beans[i];
    }

    return {
        type: SUCCESS_LOAD_BEANS,
        beanIndex: beanIndex
    };
}

export function requestLoadBeans() {
    return dispatch => {
        dispatch({
            type: REQUEST_LOAD_BEANS
        });

        return loadBeans((err, beans) => {
            if(err) {
                return dispatch(failLoadBeans(err));
            }
            return dispatch(successLoadBeans(beans));
            
        });
    };
}

export function selectBean(bean_id) {
    return {
        type: SELECT_BEAN,
        beanId: bean_id
    };
}
