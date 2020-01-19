/* eslint-disable no-debugger */
import React, {Component} from 'react';
import StkPopup from '../../components/essentials/StkPopup/StkPopup';
import { Redirect } from 'react-router-dom';

import styles from './LoginContainer.module.css';

import PropTypes from 'prop-types';
import StkTextBox from '../../components/essentials/StkTextBox/StkTextBox';
import StkButton from '../../components/essentials/StkButton/StkButton';

class LoginContainer extends Component{
	constructor(props){
		super(props);
	}

	login(){
		debugger;
		//!TODO replace this code with actual API calls
		this.props.loginHandler(true);
	}

	goBack(){
		window.history.back();
	}

	render(){
		if(this.props.loggedIn){
			return (
				<Redirect to={{pathname: '/dashboard'}}></Redirect>
			);
		}
		else{
			// let name = <StkTextBox type="text"></StkTextBox>;
			let email = <StkTextBox type="email"></StkTextBox>;
			let password = <StkTextBox type="password"></StkTextBox>;
			return (
				<StkPopup>
					<header className={styles.header}>
						<h1 className="txt-supr">Login</h1>
					</header>
					<main>
						<form onSubmit={this.login.bind(this)}>
							<div className={['flex--row-ac', styles.field_ctr].join(' ')}>
								<label className={styles.form_label} htmlFor="email">Email</label>
								{email}
							</div>
							<div className={['flex--row-ac', styles.field_ctr].join(' ')}>
								<label className={styles.form_label} htmlFor="password">Password</label>
								{password}
							</div>
						</form>
					</main>
					<footer className="mlA">
						<StkButton clickHandler={this.login.bind(this)} className={styles.login} mode="cta">Login</StkButton>
						<StkButton clickHandler={this.goBack.bind(this)} className="cancel" mode="secondary">Cancel</StkButton>
					</footer>
				</StkPopup>
			);
		}
	}
}

export default LoginContainer;

LoginContainer.propTypes = {
	loggedIn: PropTypes.bool,
	loginHandler: PropTypes.func
};