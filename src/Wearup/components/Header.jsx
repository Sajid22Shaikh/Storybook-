import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Wearup.</div>
      <div className="steps">
        <div className="step">Order Overview</div>
        <div className="step active">Information</div>
        <div className="step">Payment Details</div>
        <div className="step">Complete Order</div>
      </div>
    </header>
  );
};

export default Header;