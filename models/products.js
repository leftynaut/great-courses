const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  price: Number,
  top: Number
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;

// TODO: Link model to app
