import logo from "./logo.svg";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  return (
    <div className="divnavbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src="logo.jpeg" id="imglogo" ></img>
          <a className="navbar-brand" href="#">
            Cards&stuff
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <form className="d-flex search" id="searchbar">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            {/* <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
          </form>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  account
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      SignIn
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      MyOrders
                    </a>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider"></hr>
                  </li> */}
                
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <img src="accountimg.jpg" id="imglogo" ></img>
      </nav>
    </div>
  );
}

export default Navbar;
