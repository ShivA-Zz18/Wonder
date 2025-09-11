const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing');
const path =require('path');

app.get('/', (req, res) => {
  res.send('Hello World!');
});


const mongo_url=('mongodb://127.0.0.1:27017/wonderlust');
async function main() {
    await mongoose.connect(mongo_url);
    console.log('Connected to MongoDB');

}

app.get('/listings', async (req, res) => {
const allListings = await Listing.find({});

  // 2. Render the EJS template and send it as the single response.
  //    Make sure the path is relative to your 'views' directory.
  //    Express automatically looks in 'views', so you don't need the first slash.
  res.render('listings/index.ejs', { allListings });
});


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// app.get('/listing', async (req, res) => {
//   let sampelisting = new Listing({
//     title:"my new place",
//     description:"a nice place to stay",
//     price:100,
//     location:"my city",
//     country:"india",

//   })
//   await sampelisting.save();
//   console.log("sample was saved");
//   res.send("sucessfull testng")
// });


main().then(() => {
    console.log('MongoDB connection established');      
}).catch(err => {
    console.console.log(err);
    
}   );


 

app.listen(3000, () => {
  console.log('Server is running on port 3000');
}   );


