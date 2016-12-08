"use strict";

import { connect } from 'react-redux';

import MapView from './mapView';
import { selectShop, selectBean } from '../../actions/sideList';

const ConnectedMapView = connect(
    state => ({
        shopIndex: state.sideList.loadedShopIndex,
        beanIndex: state.sideList.loadedBeanIndex,
        selectedShopId: state.sideList.selectedShopId,
        selectedBeanId: state.sideList.selectedBeanId 
    }),
    dispatch => ({
        onShopMarkerClick: shopId => dispatch(selectShop(shopId)),
        onBeanMarkerClick: beanId => dispatch(selectBean(beanId))
    })
)(MapView);

export default ConnectedMapView;
