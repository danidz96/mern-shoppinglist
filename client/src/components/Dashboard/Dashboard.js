import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div className="container">
			<div className="create-item">
				<Link to="/create-item" className="btn btn-lg btn-info">
					Crear nuevo item
				</Link>
			</div>
		</div>
	);
};

export default Dashboard;
