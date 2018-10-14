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