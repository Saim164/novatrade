import {useState} from "react";
import { Link } from "react-router-dom";
import { FormatListBulletedOutlined } from "@mui/icons-material";

const handleLogout = async () => {
  await fetch(`${process.env.REACT_APP_API_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });
  window.location.href = process.env.REACT_APP_LANDING_URL;
};

const Menu = ({ onToggleWatchlist }) => {
  const [activeMenu, setActiveMenu] = useState(0);

  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/media/images/logo.png" alt="logo" style={{ width: "50px" }} />
      <button className="watchlist-toggle-btn" onClick={onToggleWatchlist} aria-label="Toggle watchlist">
        <FormatListBulletedOutlined className="icon" />
      </button>
      <div className="menus">
        <ul>
          <li>
            <Link to="/" onClick={() => handleMenuClick(0)} style={{ textDecoration: "none" }}>
              <p className={activeMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" onClick={() => handleMenuClick(1)} style={{ textDecoration: "none" }}>
              <p className={activeMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" onClick={() => handleMenuClick(2)} style={{ textDecoration: "none" }}>
              <p className={activeMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/positions" onClick={() => handleMenuClick(3)} style={{ textDecoration: "none" }}>
              <p className={activeMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/funds" onClick={() => handleMenuClick(4)} style={{ textDecoration: "none" }}>
              <p className={activeMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to="/apps" onClick={() => handleMenuClick(5)} style={{ textDecoration: "none" }}>
              <p className={activeMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div>
          <button className="update" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
