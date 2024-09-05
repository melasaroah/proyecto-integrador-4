import React from 'react';
import './products.css';

function Products({ addToCart }) {
  const products = [
    { id: 1, name: 'Schezwan Egg Noodles', price: 10.000, image: 'https://estaticos-cdn.prensaiberica.es/clip/decb16be-9403-4b00-92ef-88cb3873e6bd_alta-libre-aspect-ratio_default_0.jpg' },
    { id: 2, name: 'Stir Egg Fry Udon Noodles', price: 5.00, image: 'https://estaticos-cdn.prensaiberica.es/clip/decb16be-9403-4b00-92ef-88cb3873e6bd_alta-libre-aspect-ratio_default_0.jpg' },
    { id: 3, name: 'Thai Style Fried Noodles', price: 5.00, image: 'https://estaticos-cdn.prensaiberica.es/clip/decb16be-9403-4b00-92ef-88cb3873e6bd_alta-libre-aspect-ratio_default_0.jpg' },
    { id: 4, name: 'Thai Style Fried Noodles', price: 5.00, image: 'https://estaticos-cdn.prensaiberica.es/clip/decb16be-9403-4b00-92ef-88cb3873e6bd_alta-libre-aspect-ratio_default_0.jpg' },
    { id: 5, name: 'Thai Style Fried Noodles', price: 5.00, image: 'https://estaticos-cdn.prensaiberica.es/clip/decb16be-9403-4b00-92ef-88cb3873e6bd_alta-libre-aspect-ratio_default_0.jpg' },
    { id: 6, name: 'Thai Style Fried Noodles', price: 5.00, image: 'https://estaticos-cdn.prensaiberica.es/clip/decb16be-9403-4b00-92ef-88cb3873e6bd_alta-libre-aspect-ratio_default_0.jpg' },
    { id: 7, name: 'Thai Style Fried Noodles', price: 5.00, image: 'https://estaticos-cdn.prensaiberica.es/clip/decb16be-9403-4b00-92ef-88cb3873e6bd_alta-libre-aspect-ratio_default_0.jpg' },
    { id: 8, name: 'Thai Style Fried Noodles', price: 5.00, image: 'https://estaticos-cdn.prensaiberica.es/clip/decb16be-9403-4b00-92ef-88cb3873e6bd_alta-libre-aspect-ratio_default_0.jpg' },
    // Agrega más productos según sea necesario
  ];

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(3)}</p>
            <button onClick={() => addToCart(product)}>Añadir al pedido</button>
          </div>
        </div>
      ))}
    </div>
    
  );
}

export default Products;
