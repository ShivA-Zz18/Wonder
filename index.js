const mongoose = require("mongoose");
const initData = require("./Data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});

  // Clean the data before inserting
  const cleanedData = initData.data.map((obj) => ({
    ...obj,
    image: obj.image.url // Replace the image object with just its URL string
  }));
  
  await Listing.insertMany(cleanedData);
  console.log("data was initialized");
};

initDB();

