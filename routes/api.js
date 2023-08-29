const {Router}= require('express');
const router = Router();
// const Country = require('../model/countryModel');
// const City = require('../model/citiesModel');
// const Airport = require('../model/airportNModel');

const {postCountry, getCountry} = require('../controllers/countryController')
const  {postCity , getCity} = require('../controllers/citiesController')
const { postAirport, getAirport} = require('../controllers/airportNController')

// POST country


router.post('/countries', async (req, res) => {
   
  try {
    
     const country = await postCountry(req);
     res.send(country);
    
  } catch (error) {

    res.send({err:error.message})
    
  }

});

// POST city


router.post('/cities', async (req, res) => {

  try {

    const city = await postCity(req);
    res.send(city);
   
 } catch (error) {

   res.send({err:error.message})
   
 }

});

// POST airport
router.post('/airports', async (req, res) => {

  try {

    const airport = await postAirport(req);
    res.send(airport);
   
 } catch (error) {

   res.send({err:error.message})
   
 }
  
});

 /////getCOuntry///

 router.get("/country" , async(req,res)=>{

   try {
     const airport = await getCountry(req)
     res.send(airport)
    
   } catch (error) {
    res.send({err:error.message})
   }

 })


 ////getCity///

 router.get("/city" , async(req,res)=>{

  try {
    const city = await getCity(req)
    res.send(city)
   
  } catch (error) {
    res.send({err:error.message})
  }

})


////getAirport////


router.get("/airports" , async(req,res)=>{

  try {
    const airport = await getAirport()
    res.send(airport)
   
  } catch (error) {
    console.log(error);
    res.send({err:error.message})
  }

})






// router.get('/data', async (req, res) => {
//   try {
//        const getData = await getAlldata(req)
//        res.send(getData)
//   } catch (error)
//    {
//     res.send({ err: error.message  });
//   }
// });





module.exports = router;
