
import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import Navbar from './Navbar';

const HomePage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += product.quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  // Información de los productos de Nike
  const products = [
    { 
      id: 1, 
      name: 'Zapatillas Nike Air Max', 
      price: 120, 
      image: 'https://acdn.mitiendanube.com/stores/002/446/592/products/211-4ce507b1736487f5de16642853881959-640-0.jpg', 
      description: 'Zapatillas deportivas Nike Air Max con tecnología de amortiguación y comodidad.' 
    },
    { 
      id: 2, 
      name: 'Camiseta Nike Dry', 
      price: 25, 
      image: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw22315c38/products/NI_DD1992-011/NI_DD1992-011-1.jpg', 
      description: 'Camiseta deportiva Nike Dry con tejido que absorbe el sudor para mantenerte seco y cómodo.' 
    },
    { 
      id: 3, 
      name: 'Pantalones Nike Sportswear', 
      price: 40, 
      image: 'https://nikearprod.vtexassets.com/arquivos/ids/655187/DX0564_010_A_PREM.jpg?v=638213273679070000', 
      description: 'Pantalones Nike Sportswear con estilo urbano y ajuste cómodo.' 
    },
    { 
      id: 4, 
      name: 'Campera Nike Windrunner', 
      price: 60, 
      image: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwbb0e7d8d/products/NI_AR2191-100/NI_AR2191-100-1.JPG', 
      description: 'Chaqueta Nike Windrunner resistente al viento con estilo clásico.' 
    },
    { 
      id: 5, 
      name: 'Mochila Nike Brasilia', 
      price: 50, 
      image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c34d55f6-1caf-4486-99d1-87365103b1e6/mochila-de-entrenamiento-extra-grande-30l-brasilia-9-5-kvD81z.png', 
      description: 'Mochila Nike Brasilia con compartimentos espaciosos y acolchados para llevar tus cosas cómodamente.' 
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map(product => (
          <Product 
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            addToCart={addToCart}
          />
        ))}
      </main>
      <aside className="md:col-span-1">
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </aside>
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>&copy; 2024 Tienda de Ropa Nike. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default HomePage;