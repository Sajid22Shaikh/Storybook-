import React from 'react';
import Header from './components/Header/Header';
import OrderSummary from './components/OrderSummary/OrderSummary';
import PaymentForm from './components/PaymentForm/PaymentForm';
import './wearup.css';

export const Layout=()=> {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <OrderSummary />
        <PaymentForm />
      </main>
    </div>
  );
}

// export default App;