import React, {Component} from 'react';

import StkLink from '../../components/essentials/StkLink/StkLink';

import classes from './LostContainer.module.css';
import img from '../../assets/images/sad-face.jpg';

export default class LostContainer extends Component{
	goBack(){
		window.history.back();
	}
	render(){
		return (
			<article className={classes.lost_ctr}>
				<header className={classes.header_ctr}>
					<h1 className="branding">Stock Metriks</h1>
				</header>
				<section className={classes.body_section}>
					<img className={classes.sad_image} alt="Sad" src={img}></img>
					<h1 className="heading-text">404 - Page not found</h1>
					<StkLink onClick={() => this.goBack}>
						<span className="font-bld txt-bdy1">Go Back</span>
					</StkLink>
				</section>
			</article>
		);
	}
}