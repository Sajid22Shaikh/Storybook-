export const Sidebar = () => (
    <div className="side-bar">
      {[
        "Dashboard",
        "Food Order",
        "Feedback",
        "Message",
        "Order History",
        "Payment details",
        "Customization",
      ].map((item, index) => (
        <div className="food-options" key={index}>
          <img src={`./image/${item.toLowerCase().replace(/ /g, "-")}.png`} alt={item} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );