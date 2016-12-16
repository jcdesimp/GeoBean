"use strict";

import { connect } from 'react-redux';
import MainView from './mainView';

import {
        deselectShop,
        requestLoadShops,
        requestLoadBeans,
        toggleCoffeeBelt,
        toggleAbout
    } from '../../actions/sideList';

const ConnectedMainView = connect(
    state => ({
        isLoadingShops: state.sideList.fetching,
        shopSelected: (state.sideList.selectedShopId != null),
        beanSelected: (state.sideList.selectedBeanId != null),
        coffeeBeltShown: state.sideList.showCoffeeBelt,
        showAboutView: state.sideList.showAboutView
    }),
    dispatch => ({
        loadShops: () => dispatch(requestLoadShops()),
        loadBeans: () => dispatch(requestLoadBeans()),
        clearSelections: () => dispatch(deselectShop()),
        toggleCoffeeBelt: () => dispatch(toggleCoffeeBelt()),
        toggleAbout: () => dispatch(toggleAbout())
    })
)(MainView);

export default ConnectedMainView;
