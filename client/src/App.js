import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './styles/App.css';

const App = () => {
	return (
		<Router>
			<div className="App">
				<Navbar />

				<Footer />
			</div>
		</Router>
	);
};

export default App;
