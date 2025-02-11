import { Check } from 'lucide-react';
import './PaymentDetails.css';

const PaymentDetails = () => {
  const subtotal = 397.00;
  const vatRate = 0.20;
  const vat = subtotal * vatRate;
  const total = subtotal + vat;

  return (
    <div className="payment-details">
      <h2>Payment Details</h2>
      <p className="payment-description">
        Complete your purchase item by providing your payment details order.
      </p>

      <form className="payment-form">
        <div className="form-group">
          <label>Email Address</label>
          <div className="input-with-icon">
            <input 
              type="email" 
              defaultValue="barlyvellendt@gmail.com" 
              className="form-input verified" 
            />
            <Check className="check-icon" size={20} />
          </div>
        </div>

        <div className="form-group">
          <label>Card Detail</label>
          <div className="card-inputs">
            <input type="text" placeholder="Card Number" className="form-input card-number" />
            <input type="text" placeholder="MM / YY" className="form-input card-date" />
            <input type="text" placeholder="CVC" className="form-input card-cvc" />
          </div>
        </div>

        <div className="form-group">
          <label>Card Holder</label>
          <input 
            type="text" 
            defaultValue="Barly Vallendl" 
            className="form-input" 
          />
        </div>

        <div className="form-group">
          <label>Billing Address</label>
          <div className="input-with-icon">
            <input 
              type="text" 
              defaultValue="7851 Garfield Ave, Huntington Beach" 
              className="form-input verified" 
            />
            <Check className="check-icon" size={20} />
          </div>
          <div className="location-details">
            <input 
              type="text" 
              defaultValue="California(CA)" 
              className="form-input state" 
            />
            <input 
              type="text" 
              defaultValue="92648" 
              className="form-input zip" 
            />
          </div>
        </div>

        <div className="price-summary">
          <div className="price-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="price-row">
            <span>Vat (20%)</span>
            <span>${vat.toFixed(2)}</span>
          </div>
          <div className="price-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <button type="submit" className="pay-button">
          Pay ${total.toFixed(2)}
        </button>
      </form>
    </div>
  );
};

export default PaymentDetails;