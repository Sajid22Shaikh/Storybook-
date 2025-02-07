import React from 'react';
import './services.css';

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
    'Repairs & Services': [
      { name: 'AC Service', image: 'https://media.istockphoto.com/id/1208084866/photo/repairer-repairing-air-conditioner.webp?a=1&b=1&s=612x612&w=0&k=20&c=wfHliIRaBsiqWqmr1gHWFtESrdqwJ7Azf1KBlEh-cSw=' },
      { name: 'Car Service', image: 'https://media.istockphoto.com/id/1423278446/photo/auto-mechanic-service-and-repair.webp?a=1&b=1&s=612x612&w=0&k=20&c=jmgsFFFOmz-8P1o9jKIU1vBJImfDdrMWEt16POTyKTw=' },
      { name: 'Bike Service', image: 'https://media.istockphoto.com/id/1051029946/photo/people-holding-hand-are-repairing-a-motorcycle.webp?a=1&b=1&s=612x612&w=0&k=20&c=IAvROITc9HB9fS28am1aQYEgRp6Lsb5y7zY2ReY4b-w=' },
    ],
    'Daily Needs': [
      { name: 'Movies', image: 'https://media.istockphoto.com/id/688783000/photo/happy-couple-at-the-movies-eating-popcorn-and-having-fun.webp?a=1&b=1&s=612x612&w=0&k=20&c=Kd00kLg-4tMvY0BNOf2gIukgI7zvtCL5ho1cgcBu-MM=' },
      { name: 'Electricians', image: 'https://media.istockphoto.com/id/1015452484/photo/home-electrical-system.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZSNCa0G-nF5ST3hIPF3i96IV3Q7c5u7Etfm4VQf9Stc=' },
      { name: 'Grocery', image: 'https://media.istockphoto.com/id/1987658400/photo/healthy-living-for-professional-women-fresh-vegetables-green-foods-and-sustainable-eating-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=Py4csNOpUuBwC5f7QiizFnemeSsU865Yn3AL3Ta0DQg=' },
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