import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  items: [
    {
      pizza: { type: mongoose.Schema.Types.ObjectId, ref: 'Pizza', required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  status: { type: String, required: true },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;