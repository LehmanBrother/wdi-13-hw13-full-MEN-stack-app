const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
	name: {type: String, required: true},
	goodSong: {type: String, required: true},
	img: String
})

module.exports = mongoose.model('Artists', artistSchema);