const mongoose = require('mongoose');

const userregisterSchema = new mongoose.Schema({
	firstName:  { type: String, required: true },
	lastName:  { type: String, required: true },
	designation: {type: String, required: true},
	email: { type: String, required: true },
	status: {type: String, required: false},
	password:  { type: String, required: true },
});

module.exports = mongoose.model("userregisters", userregisterSchema);