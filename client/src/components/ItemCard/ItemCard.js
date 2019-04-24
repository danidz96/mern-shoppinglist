import React from 'react';
import './styles.css';

const ItemCard = () => {
	return (
		<div className="card card-item">
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the card's content.
				</p>
				<a className="card-link">Card link</a>
				<a className="card-link">Another link</a>
			</div>
		</div>
	);
};

export default ItemCard;
