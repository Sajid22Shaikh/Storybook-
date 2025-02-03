import vegetableBurger from "../Images/burger.jpg";
import meatBurger from "../Images/burger.jpg";
import cheeseBurger from "../Images/ice.png";
import salmonBurger from "../Images/burger.jpg";  
// import star from "../Images/ 

// Create an object to map food names to their corresponding images
const burgerImages = {
  "Vegetable Burger": vegetableBurger,
  "Meat Burger": meatBurger,
  "Cheese Burger": cheeseBurger,
  "Wild Salmon Burger": salmonBurger,

};

export const PopularFoods = () => (
  <div className="popular">
    <div className="heading">
      <h2>Popular</h2>
      <h2>Recent</h2>
    </div>

    <div className="burger">
      {Object.keys(burgerImages).map((item, index) => (
        <div className="burger-categories" key={index}>
          {/* Burger Image */}
          <div className="burger-img">
            <img src={burgerImages[item]} alt={item} />
          </div>

          {/* Burger Details */}
          <div className="veg-burger">
            <h2>{item}</h2>
            <div className="rates">
              <div className="rate">
                <h1>$25</h1>
                <span>$28.30</span>
              </div>

              {/* Ratings Section */}
              <div className="ratings">
                <img src={"hjhs"} alt="Rating" />
                <span>2.5K+</span>
              </div>
            </div>
          </div>

          {/* Order & Wishlist Buttons */}
          <div className="food-order">
            <div className="wishlist">
              <button>Wishlist</button>
            </div>
            <div className="order-now">
              <button>Order Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
