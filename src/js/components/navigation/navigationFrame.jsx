"use strict";

import React from 'react';
import NavigationBar from './subcomponents/navigationBar';

let links = [
    {
        to: '/',
        name: 'GeoBean'
    }
];

class NavigationFrame extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            // set initial state
        };
    }

    render() {
        return (
            <div style={{height: "calc(100vh - 38px)"}}>
                {/*<NavigationBar
                                    links={links}
                                />*/}
                {this.props.children}
                
            </div>  
        );
    }
}


NavigationFrame.propTypes = {
    // proptypes
};

export default NavigationFrame;
