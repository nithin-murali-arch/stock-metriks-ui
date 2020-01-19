/* eslint-disable no-debugger */
import React, {Component} from 'react';

import StkButton from '../../components/essentials/StkButton/StkButton';

import styles from './LostContainer.module.css';
import img from '../../assets/images/sad-face.jpg';

export default class LostContainer extends Component{
	goBack(){
		window.history.back();
	}
	render(){
		return (
			<article className={styles.lost_ctr}>
				<section className={[styles.body_section, 'flex--column-acall'].join(' ')}>
					<img className={styles.sad_image} alt="Sad" src={img}></img>
					<h1 className="{styles.heading_txt}">404 - Page not found</h1>
					<StkButton clickHandler={() => this.goBack()}>
						<span className="font-bld txt-bdy1">Go Back</span>
					</StkButton>
				</section>
			</article>
		);
	}
}