import React from 'react';

import PropTypes from 'prop-types';

import styles from './StkButton.module.css';

function StkButton(props){
	
	return (
		<button className={[styles.btn, 'dIb', 'cp'].join(' ')} onClick={props.clickhandler} {...props}>
			{props.children}
		</button>
	);
}

StkButton.propTypes = {
	clickhandler: PropTypes.func
};

export default StkButton;