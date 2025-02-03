const Dashboard = () => {
    return (
      <div className="container">
        <Navbar />
        <div className="main">
          <Sidebar />
          <div className="food-details">
            <FoodCategories />
            <PopularFoods />
          </div>
          <div className="right-sidebar">
            <Invoice />
            <Payment />
            <div className="place-order">
              <button>Place An Order Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;