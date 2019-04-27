import React from 'react';

const ShoppingCartItem = (props) => {
	const { item } = props;

	const handleClick = () => {
		props.onDelete(item);
	};

	return (
		<div>
			<li className="list-group-item mb-2">
				<strong>{item.name}</strong>
				<span className="float-right">
					{item.price} €
					<button onClick={handleClick} className="btn btn-action btn-danger btn-sm ml-4">
						<i className="far fa-trash-alt" />
					</button>
				</span>
			</li>
		</div>
	);
};

export default ShoppingCartItem;
