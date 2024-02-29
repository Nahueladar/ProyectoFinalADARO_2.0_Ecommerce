import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg p-4">
      <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{item.name} x {item.quantity}</span>
            <span>${item.price * item.quantity}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <span className="font-semibold">Total:</span>
        <span>${totalPrice}</span>
      </div>
    </div>
  );
};

export default Cart;
