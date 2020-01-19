/* eslint-disable no-debugger */
import React, {Component} from 'react';

import PropTypes from 'prop-types';

import styles from './StkButton.module.css';

export default class StkButton extends Component{
	render(){
		let mode = this.props.mode ? this.props.mode : '';
		return (
			<button className={[styles.btn, 'dIb', 'txt-bdy1', 'cp', this.props.className, ...mode.split(' ').map((item)=> styles[item])].join(' ')} onClick={this.props.clickHandler}>
				{this.props.children}
			</button>
		);
	}
}

StkButton.propTypes = {
	clickHandler: PropTypes.func,
	className: PropTypes.string,
	mode: PropTypes.string
};