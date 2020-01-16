import React, {Component} from 'react';

import PropTypes from 'prop-types';

export default class SvgIcon extends Component{
	render(){
		return (
			<svg>
				<use xlinkHref={`${this.props.iconObj}#svg-${this.props.name}`}></use>
			</svg>
		);
	}
}

SvgIcon.propTypes = {
	iconObj: PropTypes.object,
	name: PropTypes.string
}