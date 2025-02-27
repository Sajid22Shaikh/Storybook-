import React from 'react';
import './App.css';

const ServicesSection = () => {
  const services = {
    'Wedding Requisites': [
      { name: 'Banquet Halls', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=200' },
      { name: 'Bridal Requisite', image: 'https://images.unsplash.com/photo-1549416878-b9ca95e26903?auto=format&fit=crop&q=80&w=200' },
      { name: 'Caterers', image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=200' },
    ],
    'Beauty & Spa': [
      { name: 'Beauty Parlours', image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=200' },
      { name: 'Spa & Massages', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=200' },
      { name: 'Salons', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=200' },
    ],
  };

  return (
    <div className="services-section">
      {Object.entries(services).map(([category, items]) => (
        <div key={category} className="service-category">
          <h3>{category}</h3>
          <div className="service-items">
            {items.map((item, index) => (
              <div key={index} className="service-item">
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;