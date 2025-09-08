const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.send('Hello World!');
});


const mongo_url=('mongodb://127.0.0.1:27017/wonderlust');
async function main() {
    await mongoose.connect(mongo_url);
    console.log('Connected to MongoDB');

}

main().then(() => {
    console.log('MongoDB connection established');      
}).catch(err => {
    console.console.log(err);
    
}   );


 

app.listen(3000, () => {
  console.log('Server is running on port 3000');
}   );


