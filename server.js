const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const cart = require('./routes/api/cart');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB connection
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('MongoDB Connected'))
	.catch((err) => console.log(err));

// Use routes
app.use('/api/items', items);
app.use('/api/cart', cart);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
