"use strict";

import { loadBeans, loadShops } from '../lib/api';

export const REQUEST_LOAD_BEANS = "REQUEST_LOAD_BEANS";
export const SUCCESS_LOAD_BEANS = "SUCCESS_LOAD_BEANS";
export const FAIL_LOAD_BEANS = "FAIL_LOAD_BEANS";

export const REQUEST_LOAD_SHOPS = "REQUEST_LOAD_SHOPS";
export const SUCCESS_LOAD_SHOPS = "SUCCESS_LOAD_SHOPS";
export const FAIL_LOAD_SHOPS = "FAIL_LOAD_SHOPS";

export const SELECT_SHOP = "SELECT_SHOP";
export const DESELECT_SHOP = "DESELECT_SHOP";

export const SELECT_BEAN = "SELECT_BEAN";
export const DESELECT_BEAN = "DESELECT_BEAN";

export const TOGGLE_COFFEE_BELT = "TOGGLE_COFFEE_BELT";

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
        beanIndex
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

function failLoadShops(err) {
    return {
        type: FAIL_LOAD_SHOPS,
        error: err
    };
}

function successLoadShops(shops) {
    let shopIndex = {};
    for(let i = 0; i < shops.length; i++) {
        shopIndex[shops[i].id] = shops[i];
    }
    return {
        type: SUCCESS_LOAD_SHOPS,
        shopIndex
    };
}

export function requestLoadShops() {
    return dispatch => {
        dispatch({
            type: REQUEST_LOAD_BEANS
        });

        return loadShops((err, shops) => {
            if(err) {
                return dispatch(failLoadShops(err));
            }
            return dispatch(successLoadShops(shops));
        });
    };
}

export function selectShop(shopId) {
    return {
        type: SELECT_SHOP,
        shopId
    };
}

export function deselectShop() {
    return {
        type: DESELECT_SHOP
    };
}

export function selectBean(beanId) {
    return {
        type: SELECT_BEAN,
        beanId
    };
}

export function deselectBean() {
    return {
        type: DESELECT_BEAN
    };
}

export function toggleCoffeeBelt() {
    return {
        type: TOGGLE_COFFEE_BELT
    };
}

