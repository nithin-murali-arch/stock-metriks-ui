import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

import styles from './StkLink.module.css';

function StkLink(props){
	return (
		<Link className={[styles.stklink, 'dIb', 'cp'].join(' ')} onClick={props.clickhandler} {...props}>
			<div>
				{props.children}
			</div>
		</Link>
	);
}

StkLink.propTypes = {
	clickhandler: PropTypes.func
};

export default StkLink;