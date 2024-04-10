import React, { useState } from "react";
import "./navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { navBarLinks } from "../../../constants/constant";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [menuActive, setMenuActive] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
      setMenuActive(!menuActive);
    };
  return (
    <div>
      <header className="header" id="header">
      <nav className="navbar">
        <div className="max-width">
            <div className="logo"><a href="#"><img className="imglogo" src="/logo.jpeg" alt="logo" /></a></div>
            <ul className="menu">
                <li><a href="#" className="menu-btn">Home</a></li>
                <li><a href="#" className="menu-btn">About</a></li>
                <li><a href="#" className="menu-btn">contact-us</a></li>
                <li><a href="#" className="menu-btn">Events</a></li>
                <li><a href="#" className="menu-btn">Fan-Club</a></li>
                <li><a href="#" className="menu-btn">Login</a></li>
                <li><a href="#" className="menu-btn">Sign UP</a></li>
                <li><input type="text" placeholder="Seaarch Here!!" /></li>
                


            </ul>
            <div className="menu-btn">
                <i className="fas fa-bars">|</i>
            </div>
        </div>
    </nav>

        </header>
      <hr />
    </div>
  );
};

export default Navbar;
