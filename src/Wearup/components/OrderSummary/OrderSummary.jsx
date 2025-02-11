import './OrderSummary.css';

const products = [
  {
    id: '1',
    name: "New Balance 574/40 Men's Sneakers - Mindful Grey",
    size: '42 EU - 8.5 US',
    price: 129.00,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=100',
  },
  {
    id: '2',
    name: "New Balance 997H Men's Sneakers - Grey",
    size: '42.5 EU - 9 US',
    price: 119.00,
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=100',
  },
  {
    id: '3',
    name: "New Balance 574/40 Women's - Oyster Pink",
    size: '41.5 EU - 8 US',
    price: 149.00,
    originalPrice: 189.00,
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=100',
  },
];

const OrderSummary = () => {
  return (
    <div className="order-summary">
      <h2>Summary Order</h2>
      <p className="summary-description">
        Check your item and select your shipping for better experience order item.
      </p>
      
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3>{product.name}</h3>
              <span className="product-size">{product.size}</span>
              <div className="product-price">
                <span className="current-price">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="shipping-methods">
        <h3>Available Shipping Method</h3>
        <div className="shipping-options">
          <label className="shipping-option">
            <input type="radio" name="shipping" defaultChecked />
            <div className="option-content">
              <img src="https://www.fedex.com/content/dam/fedex-com/logos/logo.png" alt="FedEx" />
              <div>
                <div className="shipping-name">Fedex Delivery</div>
                <div className="delivery-time">Delivery: 2-3 days work</div>
              </div>
              <span className="shipping-price">Free</span>
            </div>
          </label>
          
          <label className="shipping-option">
            <input type="radio" name="shipping" />
            <div className="option-content">
              <img src="https://www.dhl.com/content/dam/dhl/global/core/images/logos/dhl-logo.svg" alt="DHL" />
              <div>
                <div className="shipping-name">DHL Delivery</div>
                <div className="delivery-time">Delivery: 1-3 days work</div>
              </div>
              <span className="shipping-price">$12.00</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
