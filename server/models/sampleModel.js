const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const sampleSchema = new Schema({



});

const Sample = mongoose.model("Sample", sampleSchema);
module.exports = Sample;