import React from 'react';
import {Component} from 'react';

import './MyFeature.scss';

import MyComponent from '../../components/MyComponent/MyComponent.jsx';

class MyFeature extends Component {
	render(){
		return (
			<div>
				<h3>My <span>Feature</span></h3>
				<MyComponent />
			</div>
		);
	}
}

export default MyFeature;
