"use strict";

import React from 'react';

const containerStyle = {
    height: "30px",
    overflow: "hidden"
};

const titleContainerStyle = {
    maxHeight: "30px",
    fontSize: "1.2em"
};

class ShopEntry extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div
                className={
                    this.props.className
                    + (this.props.selected ? " selected" :
                                        "")
                }
                style={containerStyle}
                onClick={this.props.onClick}
            >
                <div className="title" style={titleContainerStyle}>
                    <strong>{this.props.name}</strong>
                </div>
            </div>
        );
    }
}

ShopEntry.propTypes = {
    name: React.PropTypes.string,
    link: React.PropTypes.string,
    location: React.PropTypes.object,
    className: React.PropTypes.string,
    selected: React.PropTypes.bool,
    onClick: React.PropTypes.func
};

ShopEntry.defaultProps = {
    className: "",
    selected: false,
    onClick: () => {}
};


export default ShopEntry;
