import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import CreateItem from './components/CreateItem/CreateItem';
import './styles/App.css';

const App = () => {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Route exact path={'/'} component={Dashboard} />
				<Route exact path={'/create-item'} component={CreateItem} />
				<Footer />
			</div>
		</Router>
	);
};

export default App;
