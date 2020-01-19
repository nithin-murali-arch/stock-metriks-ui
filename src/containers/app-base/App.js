/* eslint-disable no-debugger */
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomeContainer from '../home/HomeContainer';
import LoginContainer from '../login/LoginContainer';
import LostContainer from '../lost/LostContainer';
import Landing from '../../components/landing/Landing';

import Brand from '../../components/brand/Brand';
import HeadNavBar from '../../components/landing/HeadNavBar/HeadNavBar';

import styles from './App.module.css';
import SvgSprites from '../../components/essentials/SvgSprites/SvgSprites';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			loggedIn: false
		};
	}
	loginHandler(loginState){
		this.setState({loggedIn: loginState});
	}

	shouldComponentUpdate(nextProps, nextState){
		let shouldUpdate = false;
		if(nextState.loggedIn !== this.state.loggedIn){
			shouldUpdate = true;
		}
		return shouldUpdate;
	}
	render(){
		return (
			<BrowserRouter>
				<header className={['flex--row-ac', styles.header].join(' ')}>
					<Brand/>
					<HeadNavBar loggedIn={this.state.loggedIn}/>
				</header>
				<main>
					<section className="route_container">
						<Switch>
							<Route exact path="/" component={Landing}></Route>
							<Route exact path="/home" component={HomeContainer}></Route>
							<Route exact path="/login" render={(props) => <LoginContainer {...props} loginHandler={this.loginHandler.bind(this)} loggedIn={this.state.loggedIn}/>}></Route>
							<Route component={LostContainer}></Route>
						</Switch>
					</section>
				</main>
				<footer>
				</footer>
				<SvgSprites/>
			</BrowserRouter>
		);
	}	
}
