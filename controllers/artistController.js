const express = require('express');
const router = express.Router();
const Artists = require('../models/artistModel');

//index route
router.get('/',(req, res) => {
	Artists.find({},(err, allArtists) => {
		if(err) {
			console.log(err);
		} else {
			res.render('index.ejs', {
				artists: allArtists
			})
		}
	})
})

//new route
router.get('/new', (req, res) => {
	res.render('new.ejs');
})

//post route; called by form on new
router.post('/',(req, res) => {
	Artists.create(req.body, (err, createdArtist) => {
		if(err) {
			console.log(err);
		} else {
			console.log(createdArtist);
			res.redirect('/artists');
		}
	})
})

module.exports = router;