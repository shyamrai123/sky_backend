const express = require('express');
const Airport = require('../model/airportNModel');
const { Airports } = require('../mongoConfig');



const postAirport = async (req) => {
    const  newAirport = await Airports.insertOne(req.body);
    return(newAirport)

};

const getAirport = async (req) => {
    console.log(Airports);
    const  newAirport = await Airports.find({}).toArray();
    // console.log(newAirport);
    return(newAirport)

};
module.exports = {postAirport,getAirport};
