"use strict";

import React from 'react';
import ShopEntry from './subcomponents/shopEntry';

const containerStyle = {
    height: "100%",
    position: "absolute",
    left: 0,
    width: "100%"
};

const listStyle = {
    height: "100%",
    overflowY: "scroll"
};

class BeanList extends React.Component {
    constructor(props) {
        super(props);

        this.createShopEntry = this.createShopEntry.bind(this);
        
    }

    createShopEntry(shopData) {
        return (
            <ShopEntry
                className="bean-list-entry"
                key={`shop_${shopData.id}`}
                name={shopData.name}
                description={shopData.description}
                location={shopData.location}
                selected={this.props.selectedShopId === shopData.id}
                onClick={() => this.props.onShopSelect(shopData.id)}
            />
        );
    }

    render() {
        return (
            <div style={containerStyle} className={this.props.className}>
                <div style={listStyle}>
                    {this.props.orderedShops.map(
                        b => this.createShopEntry(this.props.shopIndex[b])
                    )}
                </div>
            </div>
        );
    }
}

BeanList.shopIndex = {
    shopIndex: React.PropTypes.object,
    orderedShops: React.PropTypes.arrayOf(React.PropTypes.string),
    className: React.PropTypes.string,
    onShopSelect: React.PropTypes.func,
    selectedShopId: React.PropTypes.number
};

BeanList.defaultProps = {
    shopIndex: {},
    orderedShops: [],
    className: "",
    onShopSelect: () => {}
};

export default BeanList;
