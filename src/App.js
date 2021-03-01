// create your App component here
import React, {Component} from "react";

export class App extends Component {
	state = {
		peoples: [],
	};

	render() {
		return (
			<div>
				{this.state.peoples.map((person, id) => (
					<h1 key={id}>{person.name}</h1>
				))}
			</div>
		);
	}

	componentDidMount() {
		fetch("http://api.open-notify.org/astros.json")
			.then((response) => response.json())
			.then(({people}) => this.setState({peoples: people}));
	}
}

export default App;
