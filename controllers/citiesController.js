const express = require('express');
// const City = require('../model/citiesModel');
const {City} = require('../mongoConfig');

const postCity = async (req, res) => {
    const  newCity  = await City.insertOne(req.body);
    return(newCity)

}


const getCity = async (req, res) => {
    const  newCity  = await City.find({}).toArray();
    return(newCity)

}





module.exports = {postCity,getCity};