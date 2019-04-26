const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
	item: {
		type: Schema.Types.ObjectId,
		ref: 'item'
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Cart = mongoose.model('cart', CartSchema);
