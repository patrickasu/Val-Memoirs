import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Likebtn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: null
		}
	}

	increment = () => {
		this.setState({ count: this.state.count + 1})
	}

	render() {
		return(
			<div className="main-content">
				<Button className="like-btn" onClick={this.increment}>LIKE</Button>
				<h2>{this.state.count}</h2>
			</div>
		);
	}

}

export default Likebtn; 