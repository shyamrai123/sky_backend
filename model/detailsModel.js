const mongoose = require("mongoose");

const DetailsSchema = new mongoose.Schema(
  {
    countryname: {
      type: String,
      required: true,
    },
    cityname:{
        type:String,
        required:true,
    },
    airportsname:{
        type:String,
        required:true,
    },
      
  },
);

module.exports = mongoose.model("Details", DetailsSchema);
