"use strict";

import React from 'react';
import BeanEntry from './subcomponents/beanEntry';

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


class ShopDetail extends React.Component {
    constructor(props) {
        super(props);

        this.generateBeanEntry = this.generateBeanEntry.bind(this);
    }

    generateBeanEntry(beanInfo) {
        return (
            <li key={`bean_entry_${beanInfo.id}`}>
                <BeanEntry
                    onClick={() => this.props.selectBean(beanInfo.id)}
                    className="bean-list-entry"
                    name={beanInfo.name}
                    description={beanInfo.notes}
                    location={beanInfo.origin.name}
                />
            </li>
        );
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
                            onClick={this.props.deselectShop}
                        >
                            {'< Shops'}
                        </button>
                    </div>
                    <div className={`${this.props.className}-content`}>
                        {this.props.shopData.image ? (
                            <div
                                className={`${this.props.className}-image`}
                                style={
                                    Object.assign({}, imageStyle, {
                                        backgroundImage: `url(${this.props.shopData.image})`
                                    })
                                }
                                alt="Shop Image"
                            >
                            </div>
                        ) : undefined}
                        <h1>{this.props.shopData.name}</h1>
                        <a
                            className="more-info-link"
                            href={this.props.shopData.link}
                            target="_blank"
                        >More Info</a>
                        <h2 className="sub-title">Coffee Selection:</h2>
                        <ul>
                            {this.props.shopData.beans.map(this.generateBeanEntry)}
                        </ul>
                    </div>
        
            </div>
        );
    }
}

ShopDetail.propTypes = {
    shopData: React.PropTypes.object,
    deselectShop: React.PropTypes.func,
    selectBean: React.PropTypes.func,
    className: React.PropTypes.string
};

ShopDetail.defaultProps = {
    deselectShop: () => {},
    selectBean: () => {},
    className: ""
};

export default ShopDetail;
