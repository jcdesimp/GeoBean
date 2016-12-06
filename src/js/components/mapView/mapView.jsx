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
                key={`bean_marker_${beanData.id}`}
                lat={beanData.origin.lat}
                lng={beanData.origin.long}
            />
        );
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
                    onGoogleApiLoaded={({map, maps}) => (this.Maps = maps)}
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
    onShopMarkerClick: React.PropTypes.func
};

MapView.defaultProps = {
    className: "",
    onShopMarkerClick: () => {}
};

export default MapView;
