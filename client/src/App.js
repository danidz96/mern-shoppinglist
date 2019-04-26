import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import CreateItem from './components/CreateItem/CreateItem';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import EditItem from './components/EditItem/EditItem';
import './styles/App.css';

const App = () => {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Route exact path={'/'} component={Dashboard} />
				<Route exact path={'/create-item'} component={CreateItem} />
				<Route exact path={'/edit-item/:id'} component={EditItem} />
				<Route exact path={'/shopping-cart'} component={ShoppingCart} />
				<Footer />
			</div>
		</Router>
	);
};

export default App;
