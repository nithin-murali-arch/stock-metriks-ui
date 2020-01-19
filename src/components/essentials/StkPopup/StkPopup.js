/* eslint-disable no-debugger */
import React, {Component} from 'react';

import './StkPopup.css';
import StkFreeze from '../StkFreeze/StkFreeze';

import stkUtils from '../../../utils/stk-utils';
import SvgIcon from '../SvgIcon/SvgIcon';

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
				<div className="popup-ctr">
					<SvgIcon className="close cp" name="close"/>
					{this.props.children}
				</div>
			</div>
		);
	}
}