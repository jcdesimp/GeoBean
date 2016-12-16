"use strict";

import React from 'react';

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
                {this.props.children}
                
            </div>  
        );
    }
}


NavigationFrame.propTypes = {
    // proptypes
};

export default NavigationFrame;
