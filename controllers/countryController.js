const express = require('express');
// const Country = require('../model/countryModel');
// const City = require('../model/citiesModel');
// const Airport = require('../model/citiesModel')
const { Country } = require('../mongoConfig');





const postCountry =async (req, res) => {
    const  newCountry  = await Country.insertOne(req.body);
    return(newCountry)

}



const getCountry = async(req,res)=>{
    const newCountry = await Country.find({}).toArray();
    return (newCountry);
}



// const getAlldata =async (req,res)=>{
//     const country = await Country.find({});
//     const city = await City.find({})
//     const airport  = await Airport.find({})
//         return ({ country, city, airport });
              

// }



module.exports = {postCountry , getCountry};
