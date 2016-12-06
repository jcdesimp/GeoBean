"use strict";

import React from 'react';
import SideList from '../sideList/connectedSideList';
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
    top: 0,
    // width: "300px",
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
        this.props.loadShops();
    }

    render() {
        return (
            <div style={mainViewStyle}>
                <div style={listContainerStyle}>
                    <SideList
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
    loadShops: React.PropTypes.func,
    isLoadingShops: React.PropTypes.bool
};

export default MainView;
