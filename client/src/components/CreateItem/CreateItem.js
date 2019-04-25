import React, { useState } from 'react';
import axios from 'axios';

const CreateItem = (props) => {
	const initialItem = {
		name: '',
		description: '',
		price: '',
		errors: {}
	};

	const [ item, setItem ] = useState(initialItem);

	const onChange = (input) => {
		setItem({ ...item, [input.name]: input.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const { errors, ...itemData } = item;

		axios
			.post('/api/items', itemData)
			.then((res) => props.history.push('/'))
			.catch((err) => setItem({ ...item, errors: err.response.data }));
	};

	return (
		<div>
			<div className="create-item">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 mb-4 text-center">Crear Item</h1>
							<form onSubmit={onSubmit}>
								<div className="form-group">
									<input
										type="text"
										className={'form-control form-control-lg ' + (item.errors.name && 'is-invalid')}
										placeholder="Nombre"
										name="name"
										value={item.name}
										onChange={(e) => onChange(e.target)}
										autoComplete="text"
									/>
									{item.errors.name && <div className="invalid-feedback">{item.errors.name}</div>}
								</div>
								<div className="form-group">
									<textarea
										className={
											'form-control form-control-lg ' + (item.errors.description && 'is-invalid')
										}
										placeholder="Descripción"
										name="description"
										value={item.description}
										onChange={(e) => onChange(e.target)}
										autoComplete="text"
									/>
									{item.errors.description && (
										<div className="invalid-feedback">{item.errors.description}</div>
									)}
								</div>
								<div className="form-group">
									<input
										type="number"
										className={
											'form-control form-control-lg ' + (item.errors.price && 'is-invalid')
										}
										placeholder="Precio"
										name="price"
										value={item.price}
										onChange={(e) => onChange(e.target)}
										autoComplete="number"
									/>
									{item.errors.price && <div className="invalid-feedback">{item.errors.price}</div>}
								</div>
								<input type="submit" value="Crear" className="btn btn-info btn-block mt-4" />
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateItem;
