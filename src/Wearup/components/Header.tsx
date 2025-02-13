import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ShoppingBag className="h-6 w-6 mr-2" />
            <h1 className="text-xl font-semibold">Wearup.</h1>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span>
              <span className="ml-2">Information</span>
            </div>
            <div className="flex items-center opacity-50">
              <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm">2</span>
              <span className="ml-2">Payment Details</span>
            </div>
            <div className="flex items-center opacity-50">
              <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm">3</span>
              <span className="ml-2">Complete Order</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;