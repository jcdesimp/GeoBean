"use strict";

const MOCK_LATENCY = 0;

let sampleBeans = require('../../../../resources/beans');

export function loadBeans(callback) {
    return setTimeout(() => {
        callback(null, sampleBeans);
    }, MOCK_LATENCY);
}
