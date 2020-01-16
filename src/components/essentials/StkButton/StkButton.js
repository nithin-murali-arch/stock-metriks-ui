/* eslint-disable no-debugger */
import React from 'react';

import PropTypes from 'prop-types';

import styles from './StkButton.module.css';

function StkButton(props){
	let mode = props.mode ? props.mode : '';
	return (
		<button className={[styles.btn, 'dIb', 'cp', props.className, ...mode.split(' ').map((item)=> styles[item])].join(' ')} onClick={props.clickhandler}>
			{props.children}
		</button>
	);
}

StkButton.propTypes = {
	clickhandler: PropTypes.func,
	className: PropTypes.string,
	mode: PropTypes.string
};

export default StkButton;