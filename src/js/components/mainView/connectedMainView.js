"use strict";

import { connect } from 'react-redux';
import MainView from './mainView';

import { requestLoadShops } from '../../actions/sideList';

const ConnectedMainView = connect(
    state => ({
        isLoadingShops: state.sideList.fetching
    }),
    dispatch => ({
        loadShops: () => dispatch(requestLoadShops())
    })
)(MainView);

export default ConnectedMainView;
