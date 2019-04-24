import React from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';

const Dashboard = () => {
	return (
		<div className="container">
			<div className="create-item mb-5">
				<Link to="/create-item" className="btn btn-lg btn-info">
					Crear nuevo item
				</Link>
			</div>
			<ItemCard />
		</div>
	);
};

export default Dashboard;
