import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="Navbar">
      <div className="container nav">
        <p>MR MUNNA</p>

        <ul>
          <li className="dropdown">
            <span>
              Product
              <i>
                <IoIosArrowDown />
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
                <IoIosArrowDown />
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

        <div onClick={() => setOpen(!open)} className="toggler">
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
