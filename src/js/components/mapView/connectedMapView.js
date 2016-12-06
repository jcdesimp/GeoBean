"use strict";

import { connect } from 'react-redux';

import MapView from './mapView';
import { selectShop } from '../../actions/sideList';

const ConnectedMapView = connect(
    state => ({
        shopIndex: state.sideList.loadedShopIndex,
        selectedShopId: state.sideList.selectedShopId 
    }),
    dispatch => ({
        onShopMarkerClick: shopId => dispatch(selectShop(shopId))
    })
)(MapView);

export default ConnectedMapView;
