const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    dob : {
        type : String,
        required : true
    },
    age : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    trips : {
        type : [mongoose.SchemaTypes.ObjectId],
        required : false,
        ref : "Trips"
    },
    wishlist : {
        type : [mongoose.SchemaTypes.ObjectId],
        required : false,
        ref : "WishList"
    }
 
});

module.exports = mongoose.model("User",userSchema)