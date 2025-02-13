import React from 'react';
import './PaymentDetails.css';

const PaymentDetails = () => {
  return (
    <div className="payment-details">
      <h2>Payment Details</h2>
      <p className="payment-subtitle">Complete your purchase item by providing your payment details order.</p>

      <form className="payment-form">
        <div className="form-group">
          <label>Email Address</label>
          <div className="input-with-icon">
            <input 
              type="email" 
              defaultValue="barlyvallendit@gmail.com" 
              className="verified"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Card Detail</label>
          <div className="card-inputs">
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="MM / YY" />
            <input type="text" placeholder="CVC" />
          </div>
        </div>

        <div className="form-group">
          <label>Card Holder</label>
          <input type="text" defaultValue="Barly Vallendito" />
        </div>

        <div className="form-group">
          <label>Billing Address</label>
          <div className="input-with-icon verified">
            <input type="text" defaultValue="7861 Garfield Ave, Huntington Beach" />
          </div>
          <input type="text" defaultValue="California(CA)" />
          <input type="text" defaultValue="92648" />
        </div>

        <div className="order-total">
          <div className="subtotal">
            <span>Subtotal</span>
            <span>$397.00</span>
          </div>
          <div className="vat">
            <span>Vat (20%)</span>
            <span>$2.89</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>$399.89</span>
          </div>
        </div>

        <button type="submit" className="pay-button">
          Pay $ 399.89
        </button>
      </form>
    </div>
  );
};

export default PaymentDetails;