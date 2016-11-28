"use strict";

import { connect } from 'react-redux';

import MapView from './mapView';

const ConnectedMapView = connect(
    state => ({
        beanIndex: state.beanList.loadedBeanIndex,
        selectedBeanId: state.beanList.selectedBeanId 
    }),
    () => ({})
)(MapView);

export default ConnectedMapView;
