"use strict";

import {connect} from 'react-redux';

import BeanList from './beanList';
import { selectBean } from '../../actions/beanList';

const ConnectedBeanList = connect(
    state => ({
        beanIndex: state.beanList.loadedBeanIndex,
        orderedBeans: state.beanList.beanOrder,
        selectedBeanId: state.beanList.selectedBeanId
    }),
    dispatch => ({
        onBeanSelect: beanId => dispatch(selectBean(beanId))
    })
)(BeanList);

export default ConnectedBeanList;
