import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';
import './styles.css';

const ShoppingCart = () => {
	const [ items, setItems ] = useState([]);
	const [ totalPrice, setTotalPrice ] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get('/api/cart');
			await setItems(result.data.items);
		};
		fetchData();
	}, []);

	useEffect(
		() => {
			setTotalPrice(getTotalPrice());
		},
		[ items ]
	);

	const getTotalPrice = () => {
		let total = 0;
		total = items.length > 0 && items.reduce((a, b) => ({ price: a.price + b.price }));
		if (isNaN(total.price)) {
			return 0;
		}
		return parseFloat(total.price).toFixed(2);
	};

	const handleDelete = (itemSelected) => {
		const itemsFiltered = items;

		for (var i = itemsFiltered.length - 1; i >= 0; i--) {
			if (itemsFiltered[i] === itemSelected) {
				itemsFiltered.splice(i, 1);
				break;
			}
		}

		setItems([ ...itemsFiltered ]);
		axios
			.delete(`api/cart/${itemSelected._id}`)
			.then((res) => console.log('Deleted'))
			.catch((err) => console.log(err));
	};

	return (
		<div className="container">
			<div className="stats">
				<p>
					Objetos en el carrito: <strong>{items.length}</strong>
				</p>
				<p>
					Precio total: <strong>{totalPrice}</strong> €
				</p>
			</div>
			<ul className="list-group">
				{items.length > 0 ? (
					items.map((item, index) => (
						<div key={index}>
							<ShoppingCartItem item={item} onDelete={handleDelete} />
						</div>
					))
				) : (
					'Cargando...'
				)}
			</ul>
		</div>
	);
};

export default ShoppingCart;
