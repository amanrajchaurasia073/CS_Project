import { Button } from "bootstrap";
import logo from "./logo.svg";
import "./menu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Menu({ handlePopularClick, handleAllClick,handleTrendClick }) {
  return (
    <div className="menubar">
      <div id="menu">
        <button onClick={handleAllClick}>collection</button>
        <button onClick={handlePopularClick}>Popular</button>
        <button onClick={handleTrendClick}>Trend</button>
        <button>Aesthetic</button>
        <button>Feminine</button>
        <button>Elegant</button>
        <button>Luxury</button>
        <button>More</button>
      </div>
    </div>
  );
}

export default Menu;
