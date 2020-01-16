/* eslint-disable no-debugger */
import React, {Component} from 'react';

import styles from './StkPopup.module.css';
import StkFreeze from '../StkFreeze/StkFreeze';

import stkUtils from '../../../utils/stk-utils';
import cancel from './cancel.svg';

export default class StkPopup extends Component{
	constructor(props){
		super(props);
		this.state = {
			showFreeze: true
		};
	}
	keypressHandler(event){
		if(event.key === 'Escape'){
			stkUtils.mutateFreezeStack('pop');
			event.stopPropagation();
		}
	}
	goBack(){
		window.history.back();
	}
	render(){
		let freeze = this.state.showFreeze ? <StkFreeze></StkFreeze> : null;
		stkUtils.mutateFreezeStack('push', this.goBack);
		return (
			<div tabIndex="0" onKeyDown={this.keypressHandler.bind(this)} className="popup">
				{freeze}
				<div className={styles.popup_ctr}>
					<svg className={[styles.close, 'cp'].join(' ')} src={cancel}/>
					{this.props.children}
				</div>
			</div>
		);
	}
}