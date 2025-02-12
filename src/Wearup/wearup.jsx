import React from 'react';
import Header from './components/Header/Header';
import OrderSummary from './components/OrderSummary/OrderSummary';
import PaymentDetails from './components/PaymentDetails/PaymentDetails';
// import './wearup.css'

export const Layout=()=> {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="checkout-container">
        <div className="checkout-content">
          <OrderSummary />
          <PaymentDetails />
        </div>
      </main>
    </div>
  );
}

// export default App;