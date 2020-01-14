import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomeContainer from '../home/HomeContainer';
import LoginContainer from '../login/LoginContainer';
import LostContainer from '../lost/LostContainer';
import Landing from '../../components/landing/Landing';

import './App.css';

function App() {
	return (
		<div className="App">
			<div className="route-container">
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Landing}></Route>
						<Route exact path="/home" component={HomeContainer}></Route>
						<Route exact path="/login" component={LoginContainer}></Route>
						<Route component={LostContainer}></Route>
					</Switch>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
