"use strict";

import {connect} from 'react-redux';

import BeanList from './beanList';

const ConnectedBeanList = connect(
    state => ({
        beanIndex: state.beanList.loadedBeanIndex,
        orderedBeans: state.beanList.beanOrder
    }),
    () => ({

    })
)(BeanList);

export default ConnectedBeanList;
