import "./Navbar.css";
import { BsArrowDownShort } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container nav">
        <p>MR MUNNA</p>

        <ul>
          <li className="dropdown">
            <span>
              Product
              <i>
                <BsArrowDownShort />
              </i>
            </span>
            <div className="dropdown-content">
              <span>UI/UX Kit</span>
              <span>Web Design Kit</span>
            </div>
          </li>
          <li className="dropdown">
            <span>
              Template
              <i>
                <BsArrowDownShort />
              </i>
            </span>
            <div className="dropdown-content">
              <span>Web Temp</span>
              <span>Mobile Temp</span>
            </div>
          </li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
        <div className="sing-in-up-btn">
          <button className="btn sign-in">Sign In</button>
          <button className="btn start-free">Start Free</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
