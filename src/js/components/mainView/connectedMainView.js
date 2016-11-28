"use strict";

import { connect } from 'react-redux';
import MainView from './mainView';

import { requestLoadBeans } from '../../actions/beanList';

const ConnectedMainView = connect(
    state => ({
        isLoadingBeans: state.beanList.fetching
    }),
    dispatch => ({
        loadBeans: () => dispatch(requestLoadBeans())
    })
)(MainView);

export default ConnectedMainView;
