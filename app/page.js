import connectDB from '../db';
import Pizza from '../models/Pizza';
import User from '../models/User';
import Order from '../models/Order';

export default function Home({ pizzas, user }) {
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <h2>Available Pizzas</h2>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza._id}>
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <p>Price: ${pizza.price}</p>
          </li>
        ))}
      </ul>
      <h2>Your Orders</h2>
      <ul>
        {user.orders.map((order) => (
          <li key={order._id}>
            <p>Date: {order.date}</p>
            <p>Total: ${order.total}</p>
            <p>Status: {order.status}</p>
            <p>This is nonsesne</p>
            <ul>
              {order.items.map((item) => (
                <li key={item.pizza._id}>
                  <p>Pizza: {item.pizza.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  await connectDB();

  const pizzas = await Pizza.find({});
  const user = await User.findOne({}).populate('orders');

  return {
    props: {
      pizzas: JSON.parse(JSON.stringify(pizzas)),
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}