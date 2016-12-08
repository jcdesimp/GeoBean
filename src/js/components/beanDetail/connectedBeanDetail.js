"use strict";

import { connect } from 'react-redux';

import BeanDetail from './beanDetail';
import {deselectBean} from '../../actions/sideList';

const ConnectedBeanDetail = connect(
    state => ({
        beanData: state.sideList.loadedBeanIndex[state.sideList.selectedBeanId]
    }),
    dispatch => ({
        deselectBean: () => dispatch(deselectBean())
    })
)(BeanDetail);

export default ConnectedBeanDetail;
