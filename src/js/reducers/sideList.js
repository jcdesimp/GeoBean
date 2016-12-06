"use strict";

import {
        REQUEST_LOAD_BEANS,
        SUCCESS_LOAD_BEANS,
        FAIL_LOAD_BEANS,
        REQUEST_LOAD_SHOPS,
        SUCCESS_LOAD_SHOPS,
        FAIL_LOAD_SHOPS,
        SELECT_SHOP
    } from "../actions/sideList";

const defaultState = {
    fetchingBeans: false,
    loadedBeanIndex: {},
    beanOrder: [],
    fetchBeansError: null,
    fetchingShops: false,
    loadedShopIndex: {},
    shopOrder: [],
    selectedShopId: null,
    fetchShopsError: null,
    filter: ""
};



export default function handleAction(state = defaultState, action) {
    switch (action.type) {
    case REQUEST_LOAD_BEANS:
        return Object.assign({}, state, {
            fetchingBeans: true
        });
    case SUCCESS_LOAD_BEANS:
        return Object.assign({}, state, {
            fetchingBeans: false,
            loadedBeanIndex: action.beanIndex,
            beanOrder: Object.keys(action.beanIndex)
        });
    case FAIL_LOAD_BEANS:
        return Object.assign({}, state, {
            fetchingBeans: false,
            fetchBeansError: action.error
        });
    case REQUEST_LOAD_SHOPS:
        return Object.assign({}, state, {
            fetchingShops: true
        });
    case SUCCESS_LOAD_SHOPS:
        return Object.assign({}, state, {
            fetchingShops: false,
            loadedShopIndex: action.shopIndex,
            shopOrder: Object.keys(action.shopIndex)
        });
    case FAIL_LOAD_SHOPS:
        return Object.assign({}, state, {
            fetchingShops: false,
            fetchShopsError: action.error
        });
    case SELECT_SHOP:
        return Object.assign({}, state, {
            selectedShopId: action.shopId
        });
    default:
        return state;
    }
}

