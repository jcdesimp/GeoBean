"use strict";

import React from 'react';
import BeanList from '../beanList/connectedBeanList';
import MapView from '../mapView/connectedMapView';

const mainViewStyle = {
    width: '100%',
    height: 'calc(100% - 48px)'
};

const listContainerStyle = {
    position: "relative",
    height: "100%",
    display: "inline-block",
    left: 0,
    width: "300px",
};

const mapContainerStyle = {
    position: "relative",
    height: "100%",
    width: "calc(100% - 300px)",
    float: "right",
    display: "inline-block",
    right: 0
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
                <div style={mapContainerStyle}>
                    <MapView
                        className="map-view"
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
