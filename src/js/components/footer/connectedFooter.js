"use strict";

import { connect } from 'react-redux';

import Footer from './footer';

import { toggleAbout } from '../../actions/sideList';

const ConnectedFooter = connect(
    () => ({}),
    dispatch => ({
        toggleAbout: () => dispatch(toggleAbout())
    })
)(Footer);

export default ConnectedFooter;
