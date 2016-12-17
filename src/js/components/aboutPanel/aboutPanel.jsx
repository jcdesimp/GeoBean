"use strict";

import React from 'react';

const PanelContainerStyle = {

};


class AboutPanel extends React.Component {
    constructor(props) {
        super(props);

        this.handleInnerClick = this.handleInnerClick.bind(this);
        
    }

    handleInnerClick(event) {
        event.stopPropagation();
    }

    render() {
        return (
            <div
                style={PanelContainerStyle}
                className="about-panel-container"
                onClick={this.props.dismiss}
            >
                
                <div
                    className="about-panel"
                    onClick={this.handleInnerClick}
                >
                    <div
                        className="close-btn"
                        onClick={this.props.dismiss}
                    >
                        {"X"}
                    </div>
                    <h1>About GeoBean</h1>
                    <hr/>
                    <div className="content">
                        <h2>What is GeoBean?</h2>
                        <p>
                            GeoBean hopes to create a more meaningful connection
                            between coffee drinkers and the story behind the coffee they are drinking.
                        </p>
                        <p>
                            It is a web application that displays 
                            coffee shops and coffee beans on an interactive map.
                            It allows the user to navigate through a list
                            of coffee shops and view the origins of the beans
                            sold there. 
                        </p>
                        <h2>Implementation</h2>
                        <p>
                            Most of GeoBean's functionality resides on the client.
                            It's implemented using ReactJS and Redux. It also utilizes
                            the Google Maps API for rendering the map view. Geobean is
                            open source and can be found on Github&nbsp;
                            <a href="https://github.com/jcdesimp/geobean" target="_blank">here</a>.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

AboutPanel.propTypes = {
    dismiss: React.PropTypes.func
};

AboutPanel.defaultProps = {
    dismiss: () => {}
};

export default AboutPanel;
