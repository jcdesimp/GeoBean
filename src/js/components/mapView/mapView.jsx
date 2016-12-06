"use strict";

import React from 'react';
import GoogleMap from 'google-map-react';

import ShopMarker from './subcomponents/shopMarker';



const GMAPS_API_KEY ="AIzaSyDDo-_BuVN_VeIl1odu8SDnEL_i3ccVVrc";

const containerStyle = {
    width: "100%",
    height: "100%",
    position: "absolute"
};

class MapView extends React.Component {
    constructor(props) {
        super(props);

        this.generateShopMarker = this.generateShopMarker.bind(this);
        
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

    render() {
        let selectedShop = this.props.shopIndex[this.props.selectedShopId]
        return (
            <div
                style={containerStyle}
                className={this.props.className}
            >
                <GoogleMap
                    center={
                        this.props.selectedShopId ?
                        [selectedShop.location.lat, selectedShop.location.long] :
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
