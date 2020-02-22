import React, { Component } from 'react';
import './App.css';

import Dog from './components/dog/dog';
import About from './components/about/about';
import Cat from './components/cat/cat';
import { Route, Switch, Link, NavLink } from 'react-router-dom';

export class App extends Component {
	render() {
		return (
			<div className='App'>
				<nav className='App-nav'>
					<NavLink exact activeClassName='active-link' to='/'>
						Home
					</NavLink>
					<NavLink exact activeClassName='active-link' to='/dog'>
						Dog
					</NavLink>
					<NavLink exact activeClassName='active-link' to='/cat'>
						Cat
					</NavLink>
					<NavLink exact activeClassName='active-link' to='/dog/1'>
						Dog 1
					</NavLink>
				</nav>
				<Switch>
					<Route exact path='/' component={About} />
					<Route
						exact
						path='/dog/c'
						component={() => <Dog name='Husky' />}
					/>
					<Route
						exact
						path='/dog/r'
						render={() => <Dog name='Lab' />}
					/>
					<Route
						exact
						path='/dog/:id'
						render={(routeProps) => <Dog name='Lab' stuff={routeProps} />}
					/>
					<Route exact path='/cat' component={Cat} />
				</Switch>
			</div>
		);
	}
}
export default App;
