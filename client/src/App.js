import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import './styles/App.css';

const App = () => {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Dashboard />
				<Footer />
			</div>
		</Router>
	);
};

export default App;
