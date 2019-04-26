import React from 'react';

const ShoppingCartItem = (props) => {
	return (
		<div>
			<li className="list-group-item mb-2">
				<strong>{props.name}</strong>
				<span className="float-right">
					{props.price} €
					<button className="btn btn-action btn-danger btn-sm ml-4">
						<i className="far fa-trash-alt" />
					</button>
				</span>
			</li>
		</div>
	);
};

export default ShoppingCartItem;
