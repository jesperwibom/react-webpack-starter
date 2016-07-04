import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import MyComponent from './components/MyComponent/MyComponent.jsx';

class App extends Component {
	render(){
		return (
			<div>
				<h1>MyComponent</h1>
				<MyComponent />
			</div>
		);
	}
}

render(<App />, document.getElementById('app'));
