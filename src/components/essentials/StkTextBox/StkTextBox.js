import React, {Component} from 'react';

import PropTypes from 'prop-types';

export default class StkTextBox extends Component{
	constructor(props){
		super(props);
		this.state = {
			hasError: false,
			value: props.value
		};
	}
	getValue(){
		return this._input.value;
	}
	render(){
		this._input = (
			<input type={this.props.type} value={this.state.value} className={[(this.state.hasError ? 'input-error': ''), 'input', 'txt-bdy2'].join(' ')}></input>
		);
		return this._input;
	}
}

StkTextBox.propTypes = {
	value: PropTypes.any,
	type: PropTypes.string,
};