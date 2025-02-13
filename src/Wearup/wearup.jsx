import React from 'react';
import Header from './components/Header';
import OrderSummary from './components/OrderSummary';
import PaymentDetails from './components/PaymentDetails';
import './wearup.css';

export const Layout=()=> {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <OrderSummary />
        <PaymentDetails />
      </main>
    </div>
  );
}

// export default App;