"use strict";

import { connect } from 'react-redux';
import MainView from './mainView';

import { requestLoadShops, requestLoadBeans } from '../../actions/sideList';

const ConnectedMainView = connect(
    state => ({
        isLoadingShops: state.sideList.fetching,
        shopSelected: (state.sideList.selectedShopId != null)
    }),
    dispatch => ({
        loadShops: () => dispatch(requestLoadShops()),
        loadBeans: () => dispatch(requestLoadBeans())
    })
)(MainView);

export default ConnectedMainView;
