/* eslint-disable no-debugger */
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';



import PropTypes from 'prop-types';
import StkLink from '../../essentials/StkLink/StkLink';
import StkButton from '../../essentials/StkButton/StkButton';

const loggedInMenu = [
	{
		name: 'Dashboard',
		path: '/dashboard'
	},
	{
		name: 'Orders',
		path: '/orders'
	},
	{
		name: 'Holdings',
		path: '/holdings',
		style: 'top_nav'
	},
	{
		name: 'Reports',
		path: '/reports',
		style: 'top_nav'
	}
];

const guestMenu = [
	{
		name: 'Home',
		path: '/',
		style: 'top_nav',
		type: 'link'
	},
	{
		name: 'Products',
		path: '/products',
		style: 'top_nav',
		type: 'link'
	},
	{
		name: 'Pricing',
		path: '/pricing',
		style: 'top_nav',
		type: 'link'
	},
	{
		name: 'Help',
		path: '/help',
		style: 'top_nav',
		type: 'link'
	},
	{
		name: 'Login',
		path: '/login',
		style: 'button cta',
		className: 'mlA',
		type: 'link'
	}
];

class HeadNavBar extends Component{
	constructor(props){
		super(props);
		this.state = {
			currentTab: props.currentTab,
			loggedIn: props.loggedIn
		};
		props.history.listen((change)=>{
			this.updateTab(change.location);
		});
		if(!props.currentTab){
			this.state.currentTab = this.getTabNameFromPath();
		}
	}
	getTabNameFromPath(path){
		let array = this.props.loggedIn ? loggedInMenu : guestMenu;
		let obj = array.find((item) => item.path === (path ? path : window.location.pathname));
		return obj.name;
	}
	updateTab(path){
		let tabName = this.getTabNameFromPath(path);
		this.setState({currentTab: tabName});
	}
	render(){
		let array = this.props.loggedIn ? loggedInMenu : guestMenu;
		let elements = array.map((item)=>{
			let element;
			if(item.type === 'link'){
				element = (
					<StkLink className={item.className} mode={[item.style,this.state.currentTab === item.name ? 'selected' : ''].join(' ')} path={item.path} key={item.name}>
						<span className="txt-bdy1">{item.name}</span>
					</StkLink>
				);
			}
			else{
				element = (
					<StkButton className={item.className} mode={item.style} key={item.name}>
						<span className="txt-bdy1">{item.name}</span>
					</StkButton>
				);
			}
			return element;
		});
		return (
			<nav className="head_nav_bar flex--one">
				<ul className="flex--row-ac">
					{elements}
				</ul>
			</nav>
		);
	}
}

export default withRouter(props => <HeadNavBar {...props}></HeadNavBar>);

HeadNavBar.propTypes = {
	loggedIn: PropTypes.bool,
	currentTab: PropTypes.string,
	history: PropTypes.object
};