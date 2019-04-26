const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
	items: [
		{
			type: Schema.Types.ObjectId,
			ref: 'items'
		}
	],
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Cart = mongoose.model('cart', CartSchema);
