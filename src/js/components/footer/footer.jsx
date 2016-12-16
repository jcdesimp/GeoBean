"use strict";

import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div id="footer">
                <span className="mail-link">
                    <span
                        className="nav-link"
                        href="#"
                        onClick={this.props.toggleAbout}
                    >
                        <strong>About</strong>
                    </span>
                    <a href="mailto: geobean.creators@mail.com?subject=GeoBean%20User%20Submission">
                        <strong>
                            {"Submit Your Own!"}
                        </strong>
                    </a>
                </span>
                <div className="attributions">
                    {"Created By "}
                    <a href="https://github.com/jcdesimp" target="_blank">
                        <strong>
                            {"Joe DeSimpliciis"}
                        </strong> 
                    </a>
                    {" & "}
                    <a href="https://github.com/kayladavis" target="_blank">
                        <strong>
                            {"Kayla Davis"}
                        </strong>
                    </a>
                </div>
            </div>
        );
    }
}

Footer.propTypes = {
    toggleAbout: React.PropTypes.func
};

export default Footer;

