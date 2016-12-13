"use strict";

import React from 'react';
import SideList from '../sideList/connectedSideList';
import MapView from '../mapView/connectedMapView';
import ShopDetail from '../shopDetail/connectedShopDetail';
import BeanDetail from '../beanDetail/connectedBeanDetail';
import logoImage from 'img/geoBeanLogo.png';

const mainViewStyle = {
    width: '100%',
    // height: 'calc(100% - 64px)',
    height: '100%',
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
                    <div className="logo-container">
                        <img
                            src={logoImage}
                            alt="GeoBean"
                            onClick={this.props.clearSelections}
                        />
                        <div style={{margin: "0 auto"}}>
                            <button
                                onClick={this.props.toggleCoffeeBelt}
                                style={{margin: 0, width: '100%'}}
                                className="more-info-link"
                            >
                                {this.props.coffeeBeltShown ? "Hide Coffee Belt" : "Show Coffee Belt"}
                            </button>
                        </div>
                    </div>
                    <div style={{height: "calc(100% - 55px)"}}>
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
    beanSelected: React.PropTypes.bool,
    clearSelections: React.PropTypes.func,
    coffeeBeltShown: React.PropTypes.bool,
    toggleCoffeeBelt: React.PropTypes.func,
};

export default MainView;
