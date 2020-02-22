import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class Dog extends Component {
	static defaultProps = {
		name: 'Default',
	};
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log('Component did mount fired');
	}

	componentWillUnmount() {
		console.log('unmount called');
	}
	render() {
		/* let { id } = useParams();
		 */
		console.log('render called', this.props.stuff.match.params.id);
		return <div>Dog name: {this.props.name}</div>;
	}
}

export default Dog;
