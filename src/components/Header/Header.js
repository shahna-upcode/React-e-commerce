import React from "react";
import style from "./Header.module.css";
import logoimg from '../../images/WhatsApp Image 2024-09-23 at 6.14.29 PM.jpeg';
import { useCart } from "../../CartContext"; // Import the useCart hook


function Header() {
  const { cart } = useCart(); // Correctly invoke the useCart hook
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black text-light">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            <img src= {logoimg} height={60} width={120}></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="product">
                  Products
                </a>
              </li>
              <li className="nav-item dropdown">
                <form className={`d-flex ${style.header}`} role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className={style.searchbar}/>
                  <button
                    className={` ${style.searchbtn}`}
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="about">
                About Us
              </a>
            </li>
            <img src="https://t4.ftcdn.net/jpg/01/86/94/37/240_F_186943704_QJkLZaGKmymZuZLPLJrHDMUNpAwuHPjY.jpg" style={{height:50, }} alt="Logo" />
            {/* Display the cart count */}
            <span className={style.cart}>{cart.length}</span>
            <li className="nav-item">
              <a className="nav-link text-light" href="cart">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
