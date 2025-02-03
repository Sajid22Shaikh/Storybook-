export const Navbar = () => (
    <div className="nav-bar">
      <div className="logo">
        <img src="./image/foodislice.png" alt="Logo" />
      </div>
      <div className="search-food">
        <input type="text" placeholder="Search food" />
        <div className="filter">
          <button>Filter</button>
          <img src="./image/filter.png" alt="Filter" />
        </div>
      </div>
      <div className="prof">
        <div className="notification">
          <img src="./image/notification.png" alt="Notification" />
        </div>
        <div className="profile">
          <img src="./image/david-brown.png" alt="Profile" />
          <span>David Brown</span>
        </div>
      </div>
    </div>
  )