import React from 'react';
import { Utensils, Hotel, Sparkles, Home, Users, GraduationCap, Building2, Guitar as Hospital, HardHat, Dog, Building, User, Bluetooth as Tooth, Dumbbell, Wallet, PartyPopper, Car, Truck, Headphones, Menu } from 'lucide-react';
import './catogry.css';

const categories = [
  { icon: <Utensils />, name: 'Restaurants' },
  { icon: <Hotel />, name: 'Hotels' },
  { icon: <Sparkles />, name: 'Beauty Spa' },
  { icon: <Home />, name: 'Home Decor' },
  { icon: <Users />, name: 'Wedding Planning' },
  { icon: <GraduationCap />, name: 'Education' },
  { icon: <Building2 />, name: 'Rent & Hire' },
  { icon: <Hospital />, name: 'Hospitals' },
  { icon: <HardHat />, name: 'Contractors' },
  { icon: <Dog />, name: 'Pet Shops' },
  { icon: <Building />, name: 'PG/Hostels' },
  { icon: <User />, name: 'Estate Agent' },
  { icon: <Tooth />, name: 'Dentists' },
  { icon: <Dumbbell />, name: 'Gym' },
  { icon: <Wallet />, name: 'Loans' },
  { icon: <PartyPopper />, name: 'Event Organisers' },
  { icon: <Car />, name: 'Driving Schools' },
  { icon: <Truck />, name: 'Packers & Movers' },
  { icon: <Headphones />, name: 'Courier Service' },
  { icon: <Menu />, name: 'Popular Categories' },
];

const CategoryGrid = () => {
  return (
    <>
    <div className="category-grid">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          <div className="category-icon">{category.icon}</div>
          <span>{category.name}</span>
        </div>
      ))}
    </div>
    </>
  );
};

export default CategoryGrid;