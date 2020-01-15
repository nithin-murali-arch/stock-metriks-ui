import React, {Component} from 'react';

import StkLink from '../../components/essentials/StkLink/StkLink';

import './LostContainer.css';
import img from '../../assets/images/sad-face.jpg';

export default class LostContainer extends Component{
	goBack = ()=>{
		debugger;
		window.history.back();
	};
	render(){
		return (
			<article className="lost-ctr">
				<header className="header-pnl">
					<h1 className="branding">Stock Metriks</h1>
				</header>
				<section className="body-section">
					<img className="sad-image" alt="Sad" src={img}></img>
					<h1 className="heading-text">404 - Page not found</h1>
					<StkLink onClick={this.goBack}>
						<span className="font-bld txt-bdy1">Go Back</span>
					</StkLink>
				</section>
			</article>
		);
	}
}