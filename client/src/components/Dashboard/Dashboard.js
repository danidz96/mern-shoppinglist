import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';
import axios from 'axios';

const Dashboard = () => {
	const [ items, setItems ] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get('/api/items');
			setItems(result.data);
		};
		fetchData();
	}, []);

	const handleDelete = (itemSelected) => {
		const itemsFiltered = [ items.filter((item) => item._id !== itemSelected._id) ];
		setItems(...itemsFiltered);
		axios
			.delete(`api/items/${itemSelected._id}`)
			.then((res) => console.log('Deleted'))
			.catch((err) => console.log(err));
	};

	const handleAddToCart = (itemSelected) => {
		axios.post(`api/cart/${itemSelected._id}`).then((res) => alert('Añadido')).catch((err) => console.log(err));
	};

	return (
		<div className="container">
			<div className="create-item mb-5">
				<Link to="/create-item" className="btn btn-lg btn-info">
					Crear nuevo item
				</Link>
			</div>
			<div className="row">
				{items.length > 0 ? (
					items.map((item) => (
						<div key={item._id} className="mb-2 col-lg-4 col-md-6 col-xs-12">
							<ItemCard onDelete={handleDelete} onAddToCart={handleAddToCart} item={item} />
						</div>
					))
				) : (
					'Cargando...'
				)}
			</div>
		</div>
	);
};

export default Dashboard;
