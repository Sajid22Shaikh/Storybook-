import React from 'react';
import Header from './components/Header';
import OrderSummary from './components/OrderSummary';
import PaymentDetails from './components/PaymentDetails';

export const Layout=()=> {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <OrderSummary />
          </div>
          <div className="lg:w-1/2">
            <PaymentDetails />
          </div>
        </div>
      </main>
    </div>
  );
}

// export default App;