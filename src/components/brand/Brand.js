import React from 'react';

import {Link} from 'react-router-dom';

import styles from './Brand.module.css';

function Brand(){
	return (
		<h1 className={[styles.branding, 'txt-supr'].join(' ')}>
			<Link to="/">Stock Metriks</Link>
		</h1>
	);
}
export default Brand;