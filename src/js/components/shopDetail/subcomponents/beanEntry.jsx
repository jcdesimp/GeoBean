"use strict";

import React from 'react';

const containerStyle = {
    height: "100px",
    overflow: "hidden"
};

const titleContainerStyle = {
    height: "20px",
    fontSize: "1.2em"
};

const descriptionContainerStyle = {
    height: "40px",
    overflow: "hidden",
    textOverflow: "elipses"
};

const locationContainerStyle = {
    height: "40px",
    fontSize: "0.9em"
};

class BeanEntry extends React.Component {
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
                <div className="location" style={locationContainerStyle}>
                    <em>{this.props.location}</em>
                </div>
                <div className="description" style={descriptionContainerStyle}>
                    <span>{this.props.description}</span>
                </div>
            </div>
        );
    }
}

BeanEntry.propTypes = {
    name: React.PropTypes.string,
    description: React.PropTypes.string,
    location: React.PropTypes.string,
    className: React.PropTypes.string,
    selected: React.PropTypes.bool,
    onClick: React.PropTypes.func
};

BeanEntry.defaultProps = {
    className: "",
    selected: false,
    onClick: () => {}
};


export default BeanEntry;
