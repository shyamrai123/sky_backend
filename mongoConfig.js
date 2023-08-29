const { MongoClient } = require("mongodb");


const client = new MongoClient(
  `mongodb+srv://raishyamkumar21:${process.env.MONGO_PASS}@cluster0.2sjbkmy.mongodb.net/skyscanner`,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  { connectTimeoutMS: 30000 },
  { keepAlive: 1 }
);

const db = client.db();


const Country = db.collection("Country")
const Airports = db.collection("Airports")
const City = db.collection("City")


module.exports = {City, Airports,Country };
