import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

import styles from './StkLink.module.css';

function StkLink(props){
	let mode = props.mode ? props.mode : 'text';
	return (
		<Link className={[styles.stklink, props.className, ...(mode.split(' ').map((item)=> styles[item])), 'dIb', 'cp'].join(' ')} to={props.path}>
			<div>
				{props.children}
			</div>
		</Link>
	);
}

StkLink.propTypes = {
	mode: PropTypes.string,
	path: PropTypes.string,
	className: PropTypes.string,
	clickhandler: PropTypes.func,
	parent: PropTypes.object
};

export default StkLink;