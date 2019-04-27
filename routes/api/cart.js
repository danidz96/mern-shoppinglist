const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');
const Cart = require('../../models/Cart');

// @route   GET api/cart
router.get('/', (req, res) => {
	Cart.findOne({}, {}, { sort: { created_at: -1 } })
		.populate('items', [ 'name', 'price' ])
		.then((cart) => res.json(cart))
		.catch((err) => res.status(404).json({ noitems: 'No se han encontrado items' }));
});

// @route   POST api/cart/:item_id
router.post('/:item_id', (req, res) => {
	Item.findById(req.params.item_id)
		.then((item) => {
			Cart.findOne({}, {}, { sort: { created_at: -1 } })
				.then((cart) => {
					if (cart) {
						cart.items.push(item);
						cart.save().then((cartr) => res.json(cartr));
					} else {
						const newCart = new Cart();
						newCart.items.push(item);
						newCart.save().then((cartr) => res.json(cartr));
					}
				})
				.catch((err) => console.log(err));
		})
		.catch((err) => res.status(404).json({ noitem: 'No se ha encontrado el item' }));
});

// @route   DELETE api/cart/:item_id
router.delete('/:item_id', (req, res) => {
	Item.findById(req.params.item_id)
		.then((item) => {
			Cart.findOne({}, {}, { sort: { created_at: -1 } })
				.then((cart) => {
					// TODO: mirar que no elimine todas las referencias
					cart.items = cart.items.filter((itemCart) => (itemCart != req.params.item_id));
					cart.save().then((cart) => res.json(cart));
				})
				.catch((err) => console.log(err));
		})
		.catch((err) => res.status(404).json({ noitem: 'No se ha encontrado el item' }));
});

module.exports = router;
