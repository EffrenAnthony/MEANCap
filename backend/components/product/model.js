const mongoose = require('mongoose');
const Schema = mongoose.Schema

const mySchema = new Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  date: Date,
})

const model = mongoose.model('Product', mySchema)

module.exports = model