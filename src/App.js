import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// Pages
import Home from './home';
import Admin from './admin';
// Styles
import './styles/App.css';

function App() {
  return (
		<Router>
			<div className="App">
				<div className="Menu">
					<a href="/" className="Menu-Nav">
						User
					</a>
					<a href="/admin" className="Menu-Nav">
						Admin
					</a>
				</div>

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/admin">
						<Admin />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App;
