"use strict";

import React from 'react';
import beanLogo from 'img/Bean.png';
import selectedBeanLogo from 'img/BeanSelected.png';

const containerStyle = {
    position: "relative"
};

class BeanMarker extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let imageStyle = {
            height: this.props.selected ? "55px" : "40px",
            cursor: "pointer",
            position: "absolute",
            top: "-20px",
            left: "-20px"
        };

        return (
            <div
                onClick={this.props.onClick}
                style={containerStyle}
            >
                <img
                    className={this.props.className + (this.props.selected ? " selected" : "")}
                    style={imageStyle}
                    src={this.props.selected ? selectedBeanLogo : beanLogo}
                    alt="CoffeeCup" 
                />
            </div>
        );
    }
}

BeanMarker.propTypes = {
    onClick: React.PropTypes.func,
    selected: React.PropTypes.bool,
    className: React.PropTypes.string
};

BeanMarker.defaultProps = {
    selected: false,
    onClick: () => {},
    className: ""
};

export default BeanMarker;
