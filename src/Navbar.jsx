
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto px-4">
        <ul className="flex justify-between items-center">
          <li>
            <a href="/" className="text-white text-2xl font-semibold">Tienda de Ropa Nike</a>
          </li>
          <li>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">Inicio</a>
              </li>
              <li>
                <a href="/" className="text-gray-300 hover:text-white">Productos</a>
              </li>
              <li>
                <a href="/" className="text-gray-300 hover:text-white">Contacto</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/" className="text-gray-300 hover:text-white">Carrito</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
