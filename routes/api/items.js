const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');
const validateItemInput = require('../../validation/item');

// @route   GET api/items
router.get('/', (req, res) => {
	Item.find()
		.sort({ date: -1 })
		.then((items) => res.json(items))
		.catch((err) => res.status(404).json({ noitemsfound: 'No se han encontrado items' }));
});

// @route   POST api/posts
router.post('/', (req, res) => {
	const { errors, isValid } = validateItemInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}
	const price = parseFloat(req.body.price);
	const newItem = new Item({
		name: req.body.name,
		description: req.body.description,
		price
	});

	newItem.save().then((item) => res.json(item));
});

// @route   DELETE api/items/:id
router.delete('/:id', (req, res) => {
	Item.findById(req.params.id)
		.then((item) => {
			item.remove().then(() => res.json({ success: 'true' }));
		})
		.catch((err) => res.status(404).json({ itemnofound: 'Item no encontrado' }));
});

module.exports = router;
