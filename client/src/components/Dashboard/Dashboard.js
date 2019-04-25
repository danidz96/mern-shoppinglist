import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';
import axios from 'axios';

const Dashboard = () => {
	const [ items, setItems ] = useState([]);

	useEffect(
		() => {
			const fetchData = async () => {
				const result = await axios.get('/api/items');
				setItems(result.data);
			};
			fetchData();
		},
		[ items.length ]
	);

	return (
		<div className="container">
			<div className="create-item mb-5">
				<Link to="/create-item" className="btn btn-lg btn-info">
					Crear nuevo item
				</Link>
			</div>
			<ul className="row">
				{items.length > 0 ? (
					items.map((item) => (
						<div class="mb-2 col-lg-4 col-md-6 col-xs-12">
							<ItemCard item={item} key={item._id} />
						</div>
					))
				) : (
					'Cargando...'
				)}
			</ul>
		</div>
	);
};

export default Dashboard;
