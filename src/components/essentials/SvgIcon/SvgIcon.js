import React, {Component} from 'react';

import PropTypes from 'prop-types';

import styles from './SvgIcon.module.css';

export default class SvgIcon extends Component{
	render(){
		let size = this.props.size ? this.props.size : 'normal';
		return (
			<svg viewBox="0 0 24 24" className={[styles[size], this.props.className].join(' ')}>
				<use xlinkHref={`#svg-${this.props.name}`}></use>
			</svg>
		);
	}
}

SvgIcon.propTypes = {
	iconObj: PropTypes.object,
	name: PropTypes.string,
	size: PropTypes.string,
	className: PropTypes.string
};