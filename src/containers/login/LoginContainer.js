import React, {Component} from 'react';
import StkPopup from '../../components/essentials/StkPopup/StkPopup';
import { Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

class LoginContainer extends Component{
	constructor(props){
		super(props);
	}

	render(){
		if(this.props.loggedIn){
			return (
				<Redirect to={{pathname: '/dashboard'}}></Redirect>
			);
		}
		else{
			return (
				<StkPopup>
					<header>
						<h1 className="txt-supr">Login</h1>
					</header>
					<main>
						<form>
							<fieldset>
								<legend>Register</legend>
								<label htmlFor="name">Name</label><input id="name" type="text"/>
								<label htmlFor="email">Email</label><input id="email" type="text"/>
								<label htmlFor="password">Password</label><input type="password" id="password"/>
							</fieldset>
						</form>
					</main>
				</StkPopup>
			);
		}
	}
}

export default LoginContainer;

LoginContainer.propTypes = {
	loggedIn: PropTypes.bool
};