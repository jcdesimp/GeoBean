"use strict";
/* global process */

import React from 'react';
import Home from 'components/connectedHome';
import NavigationFrame from 'components/NavigationFrame';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import DevTools from 'components/devTools/devTools';
import Store from './store';

let history = syncHistoryWithStore(browserHistory, Store);

class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                {process.env.NODE_ENV === 'production' ? null : <DevTools/>}
                <Router history={history}>
                    <Route path="/" component={NavigationFrame}>
                        <IndexRoute component={Home} />
                        
                    </Route>
                </Router>
            </div>
        );
    }


}


export default App;
