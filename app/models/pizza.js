import mongoose from 'mongoose';

const pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: [String],
  price: { type: Number, required: true },
  image_url: { type: String, required: true },
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

export default Pizza;