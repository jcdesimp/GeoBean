"use strict";
/* global process */

import React from 'react';
import NavigationFrame from 'components/navigation/navigationFrame';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import MainView from 'components/mainView/connectedMainView';
import Footer from 'components/footer/connectedFooter';

let DevTools = (process.env.NODE_ENV !== 'production') ? 
require('components/devTools/devTools').default : f => f;
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
                        <IndexRoute component={MainView}>
                        </IndexRoute>
                    </Route>
                </Router>
                <Footer />
            </div>
        );
    }


}


export default App;
