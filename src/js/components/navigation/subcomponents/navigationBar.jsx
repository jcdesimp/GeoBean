"use strict";

import React from 'react';
import  { Link } from 'react-router';
import logoImage from 'img/geoBeanLogo.png';

const navigationBarStyle = {
    display: "block",
    padding: "0 50px",
    // textAlign: "center"
};

const navigationListStyle = {
    width: "50%",
    display: "inline-block",
    padding: 0,
    margin: 0,
    listStyle: "none"
};

const navigationLinkStyle = {
    cursor: "pointer",
    display: "block",
    height: "100%",
    padding: "5px 10px",
    textDecoration: "none",
    textAlign: "center",
    WebkitUserSelect: "none", /* webkit (safari, chrome) browsers */
    MozUserSelect: "none", /* mozilla browsers */
    KhtmlUserSelect: "none", /* webkit (konqueror) browsers */
    MsUserSelect: "none"
};


class NavigationBar extends React.Component {

    constructor(props) {
        super(props);

        this.createNavigationLink = this.createNavigationLink.bind(this);
    }

    createNavigationLink(linkData) {
        return (
            <li style={{display: 'inline-block'}} key={linkData.name}>
                <Link style={navigationLinkStyle} to={linkData.to}>
                    <img style={{height: "50px"}} src={logoImage} alt="GeoBean"/>
                </Link>
            </li>
        );
    }

    render() {


        return (
            <div className="navigation-bar" style={navigationBarStyle}>
                <ul style={navigationListStyle}>
                    {this.props.links.map(this.createNavigationLink)}
                </ul>
            </div>
        );
    }
}

NavigationBar.propTypes = {
    links: React.PropTypes.arrayOf(React.PropTypes.object)
};

NavigationBar.defaultProps = {
    links: []
};

export default NavigationBar;
