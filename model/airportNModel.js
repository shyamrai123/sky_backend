// models/Airport.js
const mongoose = require('mongoose');

const airportSchema = new mongoose.Schema({
  arrival: { 
    type: String, 
    required: true },

  departure: { 
    type:String, 
    required: true },
});



module.exports = mongoose.model('Airport', airportSchema);
