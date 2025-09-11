const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }, 
    price: { type: Number, required: true },
    location: { type: String, required: true },
    image: { type: String ,
        default:
            "https://www.pexels.com/photo/reflection-of-mountain-on-lake-braies-1525041/ default link",
        set:(v)=>v==""?"https://www.pexels.com/photo/reflection-of-mountain-on-lake-braies-1525041/ default link":v
    },
    country: { type: String,}
});
 
const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
  