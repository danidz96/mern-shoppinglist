const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateItemInput(data) {
	let errors = {};

	data.name = !isEmpty(data.name) ? data.name : '';
	// data.price = !isEmpty(data.price) ? data.price : 0;

	if (!Validator.isLength(data.name, { min: 2, max: 20 })) {
		errors.name = 'El nombre debe contener entre 2 y 20 carácteres';
	}

	if (Validator.isEmpty(data.name)) {
		errors.name = 'El nombre es necesario';
	}

	if (!Validator.isNumeric(data.price)) {
		errors.price = 'El precio es necesario';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
