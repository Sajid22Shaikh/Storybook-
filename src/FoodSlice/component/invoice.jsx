export const Invoice = () => (
    <div className="invoice">
      <h2>Invoice</h2>
      {["Vegetable Burger", "Meat Burger", "Cheese Burger"].map((item, index) => (
        <div className="variety-burger" key={index}>
          <img src={`./image/${item.toLowerCase().replace(/ /g, "-")}.png`} alt={item} />
          <div className="burger-heading">
            <h2>{item}</h2>
            <span>$25</span>
          </div>
        </div>
      ))}
    </div>
  );