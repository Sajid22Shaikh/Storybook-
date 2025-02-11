import { ShoppingBag } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">q
      <div className="header-content">
        <div className="logo">Wearup.</div>
        <nav className="checkout-steps">
          <div className="step completed">
            <span className="step-number">1</span>
            <span className="step-text">Order Overview</span>
          </div>
          <div className="step active">
            <span className="step-number">2</span>
            <span className="step-text">Information</span>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <span className="step-text">Payment Details</span>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <span className="step-text">Complete Order</span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;