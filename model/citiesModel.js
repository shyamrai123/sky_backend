// models/City.js
const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({

     
  countryname:
   { type: String, 
   required: true },

   cityname:
   { type: String,
     required: true },

});

module.exports = mongoose.model('City', citySchema);
