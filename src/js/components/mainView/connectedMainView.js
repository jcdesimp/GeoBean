"use strict";

import { connect } from 'react-redux';
import MainView from './mainView';

import { deselectShop, requestLoadShops, requestLoadBeans, toggleCoffeeBelt } from '../../actions/sideList';

const ConnectedMainView = connect(
    state => ({
        isLoadingShops: state.sideList.fetching,
        shopSelected: (state.sideList.selectedShopId != null),
        beanSelected: (state.sideList.selectedBeanId != null),
        coffeeBeltShown: state.sideList.showCoffeeBelt
    }),
    dispatch => ({
        loadShops: () => dispatch(requestLoadShops()),
        loadBeans: () => dispatch(requestLoadBeans()),
        clearSelections: () => dispatch(deselectShop()),
        toggleCoffeeBelt: () => dispatch(toggleCoffeeBelt())
    })
)(MainView);

export default ConnectedMainView;
