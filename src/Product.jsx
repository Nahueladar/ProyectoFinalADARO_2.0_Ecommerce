import React, { useState } from 'react';

const Product = ({ id, name, price, image, description, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg p-4">
      <img src={image} alt={name} className="w-full mb-2" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">${price}</p>
      <p className="text-sm text-gray-700">{description}</p>
      <div className="flex items-center mt-2">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="w-16 appearance-none border rounded-md py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={() => addToCart({ id, name, price, quantity })}
          className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default Product;
