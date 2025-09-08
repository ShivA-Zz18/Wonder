const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }, 
    price: { type: Number, required: true },
    location: { type: String, required: true },
    images: [{ type: String }],
    country: { type: String,}
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
