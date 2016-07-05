import React from 'react';
import {Component} from 'react';

import './MyComponent.css';

class MyComponent extends Component {

	constructor(props){
		super(props);
		this.state = {
			likesCount: 0
		};
		this.onLike = this.onLike.bind(this);
	}

	onLike(){
		let newLikesCount = this.state.likesCount +1;
		this.setState({
			likesCount: newLikesCount
		});
	}

	render(){
		return (
			<div>
				<h4>MyComponent</h4>
				Likes : <span className="likes-count">{this.state.likesCount}</span>
				<button onClick={this.onLike}>Like me!</button>
			</div>
		);
	}

}

export default MyComponent;
