import React, { useState } from 'react';
import './cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMoneyBillWave, faCreditCard, faQrcode } from '@fortawesome/free-solid-svg-icons';

function Cart({ cart, cartTotal, removeFromCart }) {
  const [paymentMethod, setPaymentMethod] = useState('cash'); // Estado para el método de pago seleccionado

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="cart">
      <h2>Carrito</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Tu lista está vacía.</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">${item.price}</p>
                <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-summary">
        <p>Subtotal: ${cartTotal}</p>
        <div className="payment-methods">
          <div
            className={`payment-button-container ${paymentMethod === 'cash' ? 'active' : ''}`}
            onClick={() => handlePaymentMethodChange('cash')}
          >
            <button className="payment-button">
              <FontAwesomeIcon icon={faMoneyBillWave} className="payment-icon" />
            </button>
            <span className="payment-text">Efectivo</span>
          </div>
          <div
            className={`payment-button-container ${paymentMethod === 'creditCard' ? 'active' : ''}`}
            onClick={() => handlePaymentMethodChange('creditCard')}
          >
            <button className="payment-button">
              <FontAwesomeIcon icon={faCreditCard} className="payment-icon" />
            </button>
            <span className="payment-text">Tarjeta</span>
          </div>
          <div
            className={`payment-button-container ${paymentMethod === 'qr' ? 'active' : ''}`}
            onClick={() => handlePaymentMethodChange('qr')}
          >
            <button className="payment-button">
              <FontAwesomeIcon icon={faQrcode} className="payment-icon" />
            </button>
            <span className="payment-text">Código QR</span>
          </div>
        </div>
        <button className="pay-button">Pagar</button>
      </div>
    </div>
  );
}

export default Cart;
