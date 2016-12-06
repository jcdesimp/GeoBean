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
        let shops = sampleShops.map(shop => {
            let shopWithBeans = Object.assign({}, shop);
            shopWithBeans["beans"] = [];
            for(var b = 0; b < sampleBeans.length; b++) {
                let currBean = sampleBeans[b];
                if(currBean.shop_id === shop.id) {
                    shopWithBeans["beans"].push(currBean);
                }
            }
            return shopWithBeans;
        });
        callback(null, shops);
    }, MOCK_LATENCY);
}
