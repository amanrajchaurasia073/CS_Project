import React from "react";
// import Button from "react-bootstrap/Button"; // Import Button component from react-bootstrap
import logo from "./logo.svg";
import "./griditempopular.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Popular() {
  return (
    <div className="griditems">
      {/* First card */}
      <div className="card" style={{ width: "18rem" }}>
        <img src="item1.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary" id="gobtu">
            Go somewhere
          </a>
        </div>
      </div>

      {/* Second card */}
      <div className="card" style={{ width: "18rem" }}>
        <img src="item2.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      {/* Third card */}
      <div className="card" style={{ width: "18rem" }}>
        <img src="item3.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Popular;
