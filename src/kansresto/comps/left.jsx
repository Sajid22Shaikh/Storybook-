import React, { useState } from "react";

export const LeftContent=()=>{
    const [orderItems, setOrderItems] = useState([
            {
              id: 1,
              name: 'Japanese Chicken Gyoza',
              price: 81700,
              quantity: 2,
              image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=200'
            },
            {
              id: 2,
              name: '2pcs of Amazing Avocado',
              price: 48000,
              quantity: 2,
              image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=200'
            },
            {
              id: 3,
              name: 'Healthy Kids Meal With 50%',
              price: 83000,
              quantity: 4,
              image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&q=80&w=200'
            },
            {
              id: 4,
              name: 'Krosang Thats It with 10%',
              price: 75000,
              quantity: 1,
              image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200'
            },
            
          ]);
    return(
        <>
        <div className="special1">
            <div className="mainh1">
                <h4>Special Discount Today</h4>
                <h4>Ends in:</h4>
            </div>
            <div className="procontainer">
                {orderItems.map(item=>(
                <div className="procards">
                    <img 
                        src={item.image} 
                        alt={item.name} 
                        className="food-image"
                    />
                </div>
                        
                ))}
            </div>
        </div>
        <div className="special2"></div>
        </>
        )

}