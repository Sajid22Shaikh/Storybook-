import donut from '../Images/donuts.png'
import chicken from '../Images/chicken.png'
// import pizza from '../Images/pizza.png'
import burger from '../Images/burger.jpg'
import potato from '../Images/potato.jpg'
import pizza from '../Images/pizza.jpg'
import hotdog from '../Images/hotdog.jpg'
import ice from '../Images/ice.png'
import makruni from '../Images/ice.png'
import fuchka from '../Images/ice.png'
import noodles from '../Images/ice.png'
import juice from '../Images/ice.png'
import fish from '../Images/ice.png'


const foodImages = {
  Donuts: donut,
  Burger: burger,
  Ice: ice,
  Potato: potato,
  Fuchka: fuchka,
  Pizza: pizza,
  HotDog: hotdog,
  Chicken: chicken,
  Makruni:makruni,
  Noodles:noodles,
  Juice:juice,
  Fish:fish,
  
};

export const FoodCategories = () => (
  <div className="explore-categories">
    <h2>Explore Categories</h2>
    <div className="food-categories">
      {Object.keys(foodImages).map((item, index) => (
        <div className="food-types" key={index}>
          {/* Use the mapping object to dynamically set the src */}
          <img src={foodImages[item]} alt={item} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  </div>
);