import React from 'react';

import {Link} from 'react-router-dom';

function Brand(){
	return (
		<h1 className="branding">
			<Link to="/">Stock Metriks</Link>
		</h1>
	);
}
export default Brand;