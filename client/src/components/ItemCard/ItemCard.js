import React from 'react';
import { Link } from 'react-router-dom';
import EditItem from '../EditItem/EditItem';
import './styles.css';

const ItemCard = (props) => {
	const { item } = props;

	const onDelete = () => {
		props.onDelete(item);
	};

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
						<Link
							to={{
								pathname: `/edit-item/${item._id}`,
								state: {
									item
								}
							}}
							className="btn btn-action btn-secondary btn-sm"
						>
							<i className="far fa-edit" />
						</Link>
						<button onClick={onDelete} className="btn btn-action btn-danger btn-sm">
							<i className="far fa-trash-alt" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
