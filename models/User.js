import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  orders: [
    {
      order_id: mongoose.Schema.Types.ObjectId,
      date: { type: Date, default: Date.now },
      items: [
        {
          item_id: mongoose.Schema.Types.ObjectId,
          name: String,
          quantity: Number,
          price: Number,
        },
      ],
      total: Number,
      status: String,
    },
  ],
});

const User = mongoose.model('User', userSchema);

export default User;