const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const artistsController = require('./controllers/artistController');
require('./db/db');

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app,.use(methodOverride('_method'));
app.use('/artists', artistsController);

app.get('/',(req, res) => {
	res.send('This is the server responding to a get request');
})

app.listen(3000, () => {
	console.log('Server is listening on port 3000');
})