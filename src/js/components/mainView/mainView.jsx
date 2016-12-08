"use strict";

import React from 'react';
import SideList from '../sideList/connectedSideList';
import MapView from '../mapView/connectedMapView';
import ShopDetail from '../shopDetail/connectedShopDetail';
import BeanDetail from '../beanDetail/connectedBeanDetail';

const mainViewStyle = {
    width: '100%',
    height: 'calc(100% - 48px)',
    overflow: "hidden"
};

const listContainerStyle = {
    position: "relative",
    height: "100%",
    display: "inline-block",
    left: 0,
    top: 0,
    width: "350px",
};

const mapContainerStyle = {
    position: "relative",
    height: "100%",
    width: "calc(100% - 350px)",
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
        this.props.loadBeans();
    }

    render() {



        return (
            <div style={mainViewStyle}>
                <div style={listContainerStyle}>
                    {
                        this.props.shopSelected ?
                        (
                            this.props.beanSelected ?
                            (
                                <BeanDetail
                                    className="bean-detail"
                                />
                            ) : (
                                <ShopDetail
                                    className="shop-detail"
                                />
                            )
                        ) : (
                            <SideList
                                className="shop-list"
                            />
                        )
                    }
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
    loadBeans: React.PropTypes.func,
    isLoadingShops: React.PropTypes.bool,
    shopSelected: React.PropTypes.bool,
    beanSelected: React.PropTypes.bool
};

export default MainView;
