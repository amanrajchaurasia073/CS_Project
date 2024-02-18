import { Button } from "bootstrap";
import logo from "./logo.svg";
import "./staticdiv.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function StaticDiv() {
  return (
    <div className="divnavbar">
      <div id="divimg">
        <div id="text">
          <p>Subscribe to get 20% Discount</p>
          <h2>Become a Membership</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
          </p>
        </div>
        <div id="somebutton">
          <buttom>SeeMore</buttom>
        </div>
      </div>
    </div>
  );
}

export default StaticDiv;
