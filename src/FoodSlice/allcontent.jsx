import React from "react";
import { Navbar } from "./component/navbar";
import { Sidebar } from "./component/sidebar";
import { FoodCategories } from "./component/foodcatogories";
import { PopularFoods } from "./component/poularfood";
import { Invoice } from "./component/invoice";
import { Payment } from "./component/payment";
import './style.css'

export const App = () => {
  return (
    <div className="app-container">
      {/* <Navbar /> */}
      <div className="dashboard">
        {/* <Sidebar /> */}
        <div className="main-content">
          <FoodCategories/>
          <PopularFoods/>
        </div>
        {/* <div className="right-panel">
          <Invoice/>
          <Payment/>
          <div className="order-button">
            <button>Place An Order Now</button>
          </div> */}
        </div>
      </div>
    // </div>
  );
};

