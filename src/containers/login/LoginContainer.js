import React, {Component} from 'react';

class LoginContainer extends Component{
	render(){
		return (
			<div className="login-comp">
				<form>
					<fieldset>
						<legend>Register</legend>
						<label htmlFor="name">Name</label><input id="name" type="text"/>
						<label htmlFor="email">Email</label><input id="email" type="text"/>
						<label htmlFor="password">Password</label><input type="password" id="password"/>
					</fieldset>
				</form>
			</div>
		);
	}
}

export default LoginContainer;