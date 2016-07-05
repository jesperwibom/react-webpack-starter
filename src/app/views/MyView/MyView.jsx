import React from 'react';
import {Component} from 'react';

import './MyView.sass';

import MyFeature from '../../features/MyFeature/MyFeature.jsx';

class MyView extends Component {
	render(){
		return (
			<div>
				<h2>My View</h2>
				<MyFeature />
			</div>
		);
	}
}

export default MyView;
