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

function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    zoomControlOptions: {
      style: maps.ZoomControlStyle.SMALL
    },
    mapTypeControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true
  };
}

class MapView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            flightPaths: []
        };

        this.generateShopMarker = this.generateShopMarker.bind(this);
        this.generateBeanMarker = this.generateBeanMarker.bind(this);
        this.initializeMapData = this.initializeMapData.bind(this);

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

        console.log(nextProps);

        let newState = {};

        if(!this.Maps) {
            return;
        }

        if(this.props.selectedShopId !== nextProps.selectedShopId || this.props.selectedBeanId !== nextProps.selectedBeanId) {
            let newFlightPaths = [];

            for(var i = 0; i < this.state.flightPaths.length; i++) {
                this.state.flightPaths[i].setMap(null);
            }

            if(nextProps.selectedShopId) {

                let selectedShop = nextProps.shopIndex[nextProps.selectedShopId];

                for(var b = 0; b < selectedShop.beans.length; b++) {
                    let currBean = selectedShop.beans[b];
                    newFlightPaths.push(new this.Maps.Polyline({
                        path: [
                            {lat: selectedShop.location.lat, lng: selectedShop.location.long},
                            {lat: currBean.origin.lat, lng: currBean.origin.long}
                        ],
                        strokeColor: ((nextProps.selectedBeanId === currBean.id) ? '#f7ce2a' : '#b37700'),
                        strokeOpacity: 1.0,
                        strokeWeight: 3,
                        geodesic: true,
                        map: this.Map
                    }));
                }

                newState.flightPaths = newFlightPaths;
            }

        }


        if(nextProps.showCoffeeBelt) {
            this.CoffeeBelt.setMap(this.Map);
        } else {
            this.CoffeeBelt.setMap(null);
        }




        this.setState(newState);
    }

    initializeMapData({map, maps}) {
        this.Maps = maps;
        this.Map = map;

        let coffeeBelt = new this.Maps.Rectangle({
            // paths: coffeeBeltCoords,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            fillColor: '#ff8000',
            fillOpacity: 0.35,
            bounds: {
                north: 23.43709,
                south: -23.43709,
                east: 180,
                west: -180
            },
            strokeWeight: 0
            // geodesic: true,
            // map: this.Map
        });

        this.CoffeeBelt = coffeeBelt;

        if(this.props.showCoffeeBelt) {
            coffeeBelt.setMap(this.Map);
        }

        
    }

    render() {

        return (
            <div
                style={containerStyle}
                className={this.props.className}
            >
                <GoogleMap
                    center={(() => {

                        if(this.props.selectedShopId) {
                            let selectedShop = this.props.shopIndex[this.props.selectedShopId];
                            if(this.props.selectedBeanId) {
                                let selectedBean = this.props.beanIndex[this.props.selectedBeanId];
                                return [selectedBean.origin.lat, selectedBean.origin.long];
                            }
                            return [selectedShop.location.lat, selectedShop.location.long];
                        }

                        return [38.6368382, -40.5953046];


                    })()}
                    zoom={
                        this.props.selectedShopId ?
                        (
                            this.props.selectedBeanId ? (4) :
                            (3)
                        ) :
                        (3)
                    }
                    bootstrapURLKeys={{key: GMAPS_API_KEY}}
                    onGoogleApiLoaded={this.initializeMapData}
                    options={createMapOptions}
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
    beanIndex: React.PropTypes.object,
    selectedShopId: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    selectedBeanId: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    onShopMarkerClick: React.PropTypes.func,
    onBeanMarkerClick: React.PropTypes.func,
    showCoffeeBelt: React.PropTypes.bool 

};

MapView.defaultProps = {
    className: "",
    onShopMarkerClick: () => {},
    onBeanMarkerClick: () => {},
    showCoffeeBelt: true
};

export default MapView;
