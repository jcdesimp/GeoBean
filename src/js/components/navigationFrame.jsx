"use strict";

import React from 'react';
import NavigationBar from './navigationBar';

let links = [
    {
        to: '/',
        name: 'ToastDos'
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
            <div>
                <NavigationBar
                    links={links}
                />
                <div>
                    {this.props.children}
                </div>
            </div>  
        );
    }
}


NavigationFrame.propTypes = {
    // proptypes
};

export default NavigationFrame;
