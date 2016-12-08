"use strict";

import { connect } from 'react-redux';
import ShopDetail from './shopDetail';
import {deselectShop, selectBean} from '../../actions/sideList';

const ConnectedShopDetail = connect(
    state => ({
        shopData: state.sideList.loadedShopIndex[state.sideList.selectedShopId]
    }),
    dispatch => ({
        deselectShop: () => dispatch(deselectShop()),
        selectBean: b => dispatch(selectBean(b))
    })
)(ShopDetail);

export default ConnectedShopDetail;
