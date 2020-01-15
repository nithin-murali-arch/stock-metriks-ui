import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

import './StkLink.css';

function StkLink(props){
	return (
		<div className="link-ctr dIb cp">
			<Link {...props}>
				{props.children}
			</Link>
		</div>
	);
}

export default StkLink;