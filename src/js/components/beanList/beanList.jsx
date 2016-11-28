"use strict";

import React from 'react';
import BeanEntry from './subcomponents/beanEntry';

const containerStyle = {
    height: "100%",
    maxWidth: "300px",
    position: "absolute",
    left: 0
};

const listStyle = {
    height: "100%",
    overflowY: "scroll"
};

class BeanList extends React.Component {
    constructor(props) {
        super(props);

        this.createBeanEntry = this.createBeanEntry.bind(this);
        
    }

    createBeanEntry(beanData) {
        return(
            <BeanEntry
                className="bean-list-entry"
                key={`bean_${beanData.id}`}
                name={beanData.name}
                description={beanData.description}
                location={beanData.location}
                selected={this.props.selectedBeanId === beanData.id}
                onClick={() => this.props.onBeanSelect(beanData.id)}
            />
        );
    }

    render() {
        return (
            <div style={containerStyle} className={this.props.className}>
                <div style={listStyle}>
                    {this.props.orderedBeans.map(
                        b => this.createBeanEntry(this.props.beanIndex[b])
                    )}
                </div>
            </div>
        );
    }
}

BeanList.propTypes = {
    beanIndex: React.PropTypes.object,
    orderedBeans: React.PropTypes.arrayOf(React.PropTypes.string),
    className: React.PropTypes.string,
    onBeanSelect: React.PropTypes.func,
    selectedBeanId: React.PropTypes.number
};

BeanList.defaultProps = {
    beanIndex: {},
    orderedBeans: [],
    className: "",
    onBeanSelect: () => {}
};

export default BeanList;
