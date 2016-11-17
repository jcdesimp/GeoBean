"use strict"

import React from 'react';
import Counter from 'components/connectedCounter';
import Home from 'components/connectedHome';
import NavigationFrame from 'components/NavigationFrame';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import DevTools from 'components/devTools/devTools';
import Store from './store';

let history = syncHistoryWithStore(browserHistory, Store);

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			// set initial state
		}
	}


	render() {
		return (
			<div>
				{process.env.NODE_ENV === 'production' ? null : <DevTools/>}
				<Router history={history}>
					<Route path="/" component={NavigationFrame}>
						<IndexRoute component={Home} />
				     	<Route path="counter" component={Counter}/>
				     	
				    </Route>
				</Router>
			</div>
		)
	}


}


export default App;
