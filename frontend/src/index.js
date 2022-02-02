import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <div className="main">
      <header>
        <nav className="nav">
          <div className="nav__picture">Picture HERE</div>
          <ul>
            <li>
              <a href="OrderOnline">Order Online</a>
            </li>
            <li>
              <a href="Menu">Menu</a>
            </li>
            <li>
              <a href="SignIn">Sign in</a>
            </li>
            <li>
              <a href="Cart">Cart</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main--box">
        <div className="main--box__options">
          <div className="main--box__buttons">
            <h3>START YOUR ORDER</h3>
            <button>
              <a href="main--box__menu">Menu</a>
            </button>
            <p>OR</p>
            <button>
              <a href="main--box__deals">Deals</a>
            </button>
          </div>
          <div className="main--box__landing">
            <div className="main--box__pizza">
              <a href="viewpizza">
                Pizzas
                <img src="./images/cheesepizza.jpg" alt="cheesepizza" />
              </a>
            </div>
            <div className="main--box__sides">
              <div className="main--box__sandwiches">
                <a href="viewsandwiches">
                  Sandwhiches
                  <img
                    src="./images/chickenbaconranch.jpg"
                    alt="buffalowings"
                  />
                </a>
              </div>
              <div className="main--box__wings">
                <a href="viewwings">
                  Wings
                  <img src="./images/buffalowings.jpg" alt="buffalowings" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main--box__order">
          <a href="order">Order Now</a>
        </div>
      </main>
      <footer className="footer">
        Any Delivery Charge is not a tip paid to your driver. Please reward your
        driver for awesomeness. Drivers carry less than $20. You must ask for
        this limited time offer. Minimum purchase required for delivery.
        Delivery charge and tax may apply. Prices, participation, delivery area
        and charges may vary. Returned checks, along with the state's maximum
        allowable returned check fee, may be electronically presented to your
        bank. ©2022 Tony's Pizza®.
      </footer>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
