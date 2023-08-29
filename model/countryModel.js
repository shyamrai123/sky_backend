// models/Country.js
const mongoose = require('mongoose');
const countrySchema = new mongoose.Schema({
  countryname:
   { type: String,
     required: true },

   code:{
    type:String,
    require:true
   }   
});


module.exports = mongoose.model('Country', countrySchema);
