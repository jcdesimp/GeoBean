"use strict";

import {connect} from 'react-redux';

import SideList from './sideList';
import { selectShop } from '../../actions/sideList';

const ConnectedSideList = connect(
    state => ({
        shopIndex: state.sideList.loadedShopIndex,
        orderedShops: state.sideList.shopOrder,
        selectedShopId: state.sideList.selectedShopId
    }),
    dispatch => ({
        onShopSelect: shopId => dispatch(selectShop(shopId))
    })
)(SideList);

export default ConnectedSideList;
