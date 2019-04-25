import React from 'react';
import './styles.css';

const ItemCard = ({ item }) => {
	return (
		<div className="col-sm-3">
			<div className="card card-item">
				<div className="card-body">
					<h5 className="card-title">{item.name}</h5>
					<h6 className="card-subtitle mb-2 text-muted">{item.price} €</h6>
					<p className="card-text">{item.description}</p>
					<div className="button-container">
						<button className="btn add-to-cart btn-success btn-sm">
							<i className="fas fa-shopping-cart" />
						</button>
						<button className="btn btn-action btn-secondary btn-sm">
							<i className="far fa-edit" />
						</button>
						<button className="btn btn-action btn-danger btn-sm">
							<i className="far fa-trash-alt" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
