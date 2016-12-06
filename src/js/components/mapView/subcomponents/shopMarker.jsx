"use strict";

import React from 'react';
import coffeeCupLogo from 'img/CoffeeCup.png';
import coffeeCupLogoSelected from 'img/CoffeeCupSelected.png';

const imageStyle = {
    height: "50px",
    width: "50px",
    cursor: "pointer"
};

class ShopMarker extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <img
                className={this.props.className + (this.props.selected ? " selected" : "")}
                style={imageStyle}
                src={this.props.selected ? coffeeCupLogoSelected : coffeeCupLogo}
                alt="CoffeeCup"
                onClick={this.props.onClick}
            />
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
