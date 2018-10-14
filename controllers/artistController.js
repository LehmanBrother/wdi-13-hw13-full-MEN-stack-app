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

//show route
router.get('/:index', (req, res) => {
	Artists.findById(req.params.index, (err, foundArtist) => {
		if(err) {
			console.log(err);
		} else {
			console.log(foundArtist);
			res.render('show.ejs', {
				artist: foundArtist
			})
		}
	})
})

//delete route
router.delete('/:index', (req, res) => {
	Factions.findByIdAndRemove(req.params.index, (err, response) => {
		if(err) {
			console.log(err);
		} else {
			console.log(response);
			res.redirect('/artists');
		}
	})
})



module.exports = router;