import React from 'react';

const OrderSummary = () => {
  const items = [
    {
      id: 1,
      name: "New Balance 5740 Men's Sneakers - Mindful Grey",
      price: 129.00,
      originalPrice: 189.00,
      size: "42 EU - 8.5 US",
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      name: "New Balance 997H Men's Sneakers - Grey",
      price: 119.00,
      originalPrice: 159.00,
      size: "42.5 EU - 9 US",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      name: "New Balance 5740 Women's - Oyster Pink",
      price: 149.00,
      originalPrice: 199.00,
      size: "41.5 EU - 8 US",
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Summary Order</h2>
      <p className="text-gray-600 mb-6">Check your item and select your shipping for better experience order item.</p>
      
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.size}</p>
              <div className="flex items-center mt-2">
                <span className="font-semibold">${item.price.toFixed(2)}</span>
                <span className="text-gray-400 line-through text-sm ml-2">${item.originalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="font-medium mb-4">Available Shipping Method</h3>
        <div className="space-y-3">
          <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer">
            <div className="flex items-center">
              <img src="https://www.fedex.com/content/dam/fedex-com/logos/logo.png" alt="FedEx" className="h-6 mr-3" />
              <div>
                <p className="font-medium">FedEx Delivery</p>
                <p className="text-sm text-gray-500">Delivery: 2-3 days work</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-2">Free</span>
              <input type="radio" name="shipping" className="form-radio" defaultChecked />
            </div>
          </label>

          <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer">
            <div className="flex items-center">
              <img src="https://www.dhl.com/content/dam/dhl/global/core/images/logos/dhl-logo.svg" alt="DHL" className="h-6 mr-3" />
              <div>
                <p className="font-medium">DHL Delivery</p>
                <p className="text-sm text-gray-500">Delivery: 1-3 days work</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-2">$12.00</span>
              <input type="radio" name="shipping" className="form-radio" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;