import React, {Component} from 'react';

export default class SvgSprites extends Component{
	render(){
		return (
			<svg className="dn" viewBox="0 0 24 24">
				<symbol id="svg-close">
					<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/>
				</symbol>
				<symbol id="svg-caution">
					<path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
				</symbol>
			</svg>
		);
	}
}