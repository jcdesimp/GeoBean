"use strict";

import React from 'react';

const containerStyle = {
    width: "100%",
    height: "100%",
    overflowX: "hidden",
    overflowY: "scroll"
};

const imageStyle = {
    width: "100%",
    height: "200px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
};

const backBarStyle = {
    position: "absolute",
    width: "100%"
};

const backButtonStyle = {
    height: "100%"
};


class BeanDetail extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div
                style={containerStyle}
                className={this.props.className}
            >
                    
                    <div className="back-bar" style={backBarStyle}>
                        <button
                            style={backButtonStyle}
                            onClick={this.props.deselectBean}
                        >
                            {'< Shop Info'}
                        </button>
                    </div>
                    <div className={`${this.props.className}-content`}>
                        {this.props.beanData.origin.image ? (
                            <div
                                className={`${this.props.className}-image`}
                                style={
                                    Object.assign({}, imageStyle, {
                                        backgroundImage: `url(${this.props.beanData.origin.image})`
                                    })
                                }
                                alt="Bean Image"
                            >
                            </div>
                        ) : undefined}
                        <h1>{this.props.beanData.name}</h1>
                        <p>{this.props.beanData.notes}</p>
                        <h2>Origin</h2>
                        <h3>{this.props.beanData.origin.name}</h3>
                        <p>{this.props.beanData.origin.description}</p>
                        <a
                            href={this.props.beanData.origin.link}
                            target="_blank"
                        >More Info</a>
                    </div>
        
            </div>
        );
    }
}

BeanDetail.propTypes = {
    beanData: React.PropTypes.object,
    deselectBean: React.PropTypes.func,
    className: React.PropTypes.string
};

BeanDetail.defaultProps = {
    deselectBean: () => {},
    className: ""
};

export default BeanDetail;
