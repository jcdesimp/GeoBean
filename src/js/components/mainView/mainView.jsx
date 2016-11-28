"use strict";

import React from 'react';
import BeanList from '../beanList/connectedBeanList';

const mainViewStyle = {
    width: '100%',
    height: 'calc(100% - 48px)'
};

const listContainerStyle = {
    position: "relative",
    height: "100%",
    left: 0
};

class MainView extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentWillMount() {
        this.props.loadBeans();
    }

    render() {
        return (
            <div style={mainViewStyle}>
                <div style={listContainerStyle}>
                    <BeanList
                        className="bean-list"
                    />
                </div>
            </div>
        );
    }
}

MainView.propTypes = {
    loadBeans: React.PropTypes.func,
    isLoadingBeans: React.PropTypes.bool
};

export default MainView;
