require("dotenv").config();
const Express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const router = require('./routes/api');
const Auth = require('./middlewares/auth')

const country = require("country-state-city")
const cors = require("cors");
const app = Express();
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Auth);

mongoose.connect(
  `mongodb+srv://raishyamkumar21:${process.env.MONGO_PASS}@cluster0.2sjbkmy.mongodb.net/skyscanner`
);

app.use(bodyParser.json());






app.get("/",()=>{
  try {
    const datas = country.City.getAllCities()
    res.send()
  } catch (error) {
    console.log(error)
  }
})

app.use('/api', router);



app.listen(4000, () => console.log("server running at port 4000"));





