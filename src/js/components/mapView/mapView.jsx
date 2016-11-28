"use strict";

import React from 'react';
import GoogleMap from 'google-map-react';

const GMAPS_API_KEY ="AIzaSyDDo-_BuVN_VeIl1odu8SDnEL_i3ccVVrc";

const containerStyle = {
    width: "100%",
    height: "100%",
    position: "absolute"
};

class MapView extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div
                style={containerStyle}
                className={this.props.className}
            >
                <GoogleMap
                    bootstrapURLKeys={{key: GMAPS_API_KEY}}
                    center={[59.938043, 30.337157]}
                    zoom={9}
                />
            </div>
        );
    }
}

MapView.propTypes = {
    className: React.PropTypes.string,
    beanIndex: React.PropTypes.object,
    selectedBeanId: React.PropTypes.oneOf([
        React.PropTypes.string,
        React.PropTypes.number
    ])
};

MapView.defaultProps = {
    className: ""
};

export default MapView;
