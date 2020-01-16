/* eslint-disable no-debugger */
import React, {Component} from 'react';

import StkButton from '../../components/essentials/StkButton/StkButton';
import Brand from '../../components/brand/Brand';

import styles from './LostContainer.module.css';
import img from '../../assets/images/sad-face.jpg';

export default class LostContainer extends Component{
	goBack(){
		window.history.back();
	}
	render(){
		return (
			<article className={styles.lost_ctr}>
				<header className={styles.header_ctr}>
					<Brand></Brand>
				</header>
				<section className={styles.body_section}>
					<img className={styles.sad_image} alt="Sad" src={img}></img>
					<h1 className="heading-text">404 - Page not found</h1>
					<StkButton clickhandler={() => this.goBack()}>
						<span className="font-bld txt-bdy1">Go Back</span>
					</StkButton>
				</section>
			</article>
		);
	}
}