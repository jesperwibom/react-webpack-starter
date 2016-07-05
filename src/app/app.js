import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';

import MyView from './views/MyView/MyView.jsx';

class App extends Component {
	render(){
		return (
			<div>
				<h1>MyApp</h1>
				<MyView />
			</div>
		);
	}
}

render(<App />, document.getElementById('app'));
