"use strict";

import React from 'react';
import coffeeCupLogo from 'img/CoffeeCup.png';
import coffeeCupLogoSelected from 'img/CoffeeCupSelected.png';

const containerStyle = {
    textAlign: "center",
    margin: "0 auto",
    position: "relative"
};

class ShopMarker extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let imageStyle = {
            height: this.props.selected ? "55px" : "40px",
            cursor: "pointer"
        };

        return (
            <div
                onClick={this.props.onClick}
                style={containerStyle}
            >
                <img
                    className={this.props.className + (this.props.selected ? " selected" : "")}
                    style={imageStyle}
                    src={this.props.selected ? coffeeCupLogoSelected : coffeeCupLogo}
                    alt="CoffeeCup" 
                />
            </div>
        );
    }
}

ShopMarker.propTypes = {
    onClick: React.PropTypes.func,
    selected: React.PropTypes.bool,
    className: React.PropTypes.string
};

ShopMarker.defaultProps = {
    selected: false,
    onClick: () => {},
    className: ""
};

export default ShopMarker;
