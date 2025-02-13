import React from 'react';
import { CreditCard, User, MapPin } from 'lucide-react';

const PaymentDetails = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
      <p className="text-gray-600 mb-6">Complete your purchase item by providing your payment details order.</p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <div className="relative">
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value="barlyvallendit@gmail.com"
              readOnly
            />
            <span className="absolute right-3 top-2.5 text-green-500">✓</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Card Detail</label>
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="relative">
                <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-24 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="CVC"
              className="w-20 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Card Holder</label>
          <div className="relative">
            <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Name on card"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              defaultValue="Barly Vallendito"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Billing Address</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value="7851 Garfield Ave, Huntington Beach"
              readOnly
            />
            <span className="absolute right-3 top-2.5 text-green-500">✓</span>
          </div>
          <div className="mt-3 flex space-x-4">
            <input
              type="text"
              className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value="California(CA)"
              readOnly
            />
            <input
              type="text"
              className="w-24 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value="92648"
              readOnly
            />
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">$397.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Vat (20%)</span>
            <span className="font-medium">$2.89</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-4">
            <span>Total</span>
            <span>$399.89</span>
          </div>
          <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Pay $399.89
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;