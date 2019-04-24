import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './styles/App.css';

const App = () => {
	return (
		<Router>
			<div className="App">
				<Navbar />
			</div>
		</Router>
	);
};

export default App;
