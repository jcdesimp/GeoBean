"use strict";

import React from 'react';
import GoogleMap from 'google-map-react';

import ShopMarker from './subcomponents/shopMarker';
import BeanMarker from './subcomponents/beanMarker';



const GMAPS_API_KEY ="AIzaSyDDo-_BuVN_VeIl1odu8SDnEL_i3ccVVrc";

const containerStyle = {
    width: "100%",
    height: "100%",
    position: "absolute"
};

class MapView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            flightPaths: []
        };

        this.generateShopMarker = this.generateShopMarker.bind(this);
        this.generateBeanMarker = this.generateBeanMarker.bind(this);
        this.updateMapInternals = this.updateMapInternals.bind(this);
        
    }



    generateShopMarker(shopData) {
        return (
            <ShopMarker
                className="shop-marker"
                selected={this.props.selectedShopId === shopData.id}
                key={`shop_marker_${shopData.id}`}
                lat={shopData.location.lat}
                lng={shopData.location.long}
                text={shopData.location.name}
                onClick={() => this.props.onShopMarkerClick(shopData.id)}
            />
        );
    }

    generateBeanMarker(beanData) {
        return (
            <BeanMarker
                className="shop-marker"
                selected={this.props.selectedBeanId === beanData.id}
                key={`bean_marker_${beanData.id}`}
                lat={beanData.origin.lat}
                lng={beanData.origin.long}
                onClick={() => this.props.onBeanMarkerClick(beanData.id)}
            />
        );
    }

    componentWillReceiveProps(nextProps) {
        
        if(!this.Maps) {
            return;
        }

        if(this.props.selectedShopId !== nextProps.selectedShopId || this.props.selectedBeanId !== nextProps.selectedBeanId) {
            let newFlightPaths = [];

            for(var i = 0; i < this.state.flightPaths.length; i++) {
                this.state.flightPaths[i].setMap(null);
            }

            if(!nextProps.selectedShopId) {
                return;
            }

            let selectedShop = nextProps.shopIndex[nextProps.selectedShopId];

            for(var b = 0; b < selectedShop.beans.length; b++) {
                let currBean = selectedShop.beans[b];
                newFlightPaths.push(new this.Maps.Polyline({
                    path: [
                        {lat: selectedShop.location.lat, lng: selectedShop.location.long},
                        {lat: currBean.origin.lat, lng: currBean.origin.long}
                    ],
                    strokeColor: ((nextProps.selectedBeanId === currBean.id) ? '#f7ce2a' : '#663300'),
                    strokeOpacity: 1.0,
                    strokeWeight: 3,
                    geodesic: true,
                    map: this.Map
                }));
            }

            this.setState({
                flightPaths: newFlightPaths
            });
        }
    }

    updateMapInternals() {

    }

    render() {
        let selectedShop = this.props.shopIndex[this.props.selectedShopId];
        return (
            <div
                style={containerStyle}
                className={this.props.className}
            >
                <GoogleMap
                    center={
                        // this.props.selectedShopId ?
                        // [selectedShop.location.lat, selectedShop.location.long] :
                        [43.15048, -77.5671882]
                    }
                    zoom={8}
                    bootstrapURLKeys={{key: GMAPS_API_KEY}}
                    onGoogleApiLoaded={({map, maps}) => ((this.Maps = maps) && (this.Map = map))}
                >
                    {
                        Object.keys(this.props.shopIndex)
                        .map(k => this.generateShopMarker(this.props.shopIndex[k]))
                    } 
                    {
                        (this.props.selectedShopId) ? 
                        (this.props.shopIndex[this.props.selectedShopId].beans.map(this.generateBeanMarker)) : f => f
                    }      
                </GoogleMap>
            </div>
        );
    }
}

MapView.propTypes = {
    className: React.PropTypes.string,
    shopIndex: React.PropTypes.object,
    selectedShopId: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    selectedBeanId: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    onShopMarkerClick: React.PropTypes.func,
    onBeanMarkerClick: React.PropTypes.func
};

MapView.defaultProps = {
    className: "",
    onShopMarkerClick: () => {},
    onBeanMarkerClick: () => {}
};

export default MapView;
