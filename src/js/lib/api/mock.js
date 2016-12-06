"use strict";

const MOCK_LATENCY = 0;

let sampleBeans = require('../../../../resources/beans');
let sampleShops = require('../../../../resources/shops');

export function loadBeans(callback) {
    return setTimeout(() => {
        callback(null, sampleBeans);
    }, MOCK_LATENCY);
}

export function loadShops(callback) {
    return setTimeout(() => {
        callback(null, sampleShops);
    }, MOCK_LATENCY);
}
