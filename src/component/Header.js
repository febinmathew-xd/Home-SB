import { Link } from "react-router-dom";
import Footer from "./Footer";
import react, { useContext } from "react";
import { AuthenticationContext } from "./AuthenticationContext";

function Header() {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <>
      <header>
        <div className="container ">
          <div className="header-top">
            <div className="row">
              <div className="col-md-6">
                <div className="full">
                  <div className="logo">
                    <h1 style={{ color: "red" }}>SPORTS BUDDY APPLICATION</h1>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right_top_section">
                  <ul className="login">
                    <li>
                      <div className="cart-option">
                        <li>
                          <Link to="/distributor">Distributor</Link>
                        </li>
                        <li>
                          <a
                            style={{ cursor: "pointer" }}
                            onClick={() => onLogout()}
                          >
                            Logout
                          </a>
                        </li>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <div className="main-menu-section">
                    <div className="menu">
                      <nav className="navbar navbar-inverse">
                        <div className="navbar-header">
                          <button
                            className="navbar-toggle"
                            type="button"
                            data-toggle="collapse"
                            data-target=".js-navbar-collapse"
                          >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand" href="#">
                            Menu
                          </a>
                        </div>
                        <div className="collapse navbar-collapse js-navbar-collapse">
                          <ul className="nav navbar-nav">
                            <li className="active">
                              <Link to="/">Home</Link>
                            </li>
                            <li>
                              <Link to="/accessories">Accessories</Link>
                            </li>
                            {/* <li><Link to="/about">About</Link></li> */}
                            {/* /<li><Link to="/contact">Contact</Link></li> */}
                            <li>
                              <Link to="/turf">Turf</Link>
                            </li>
                            <li>
                              <Link to="/tournament">Tournaments</Link>
                            </li>
                            <li>
                              <Link to="/booking">Booking</Link>
                            </li>
                            <li>
                              <Link to="/orders">Orders</Link>
                            </li>
                            <li>
                              <Link to="/cart">Cart</Link>
                            </li>

                            <li>
                              <Link to="/feedback">Feedback</Link>
                            </li>
                            <li>
                              <Link to="/news">News</Link>
                            </li>
                          </ul>
                        </div>
                      </nav>
                      <div className="search-bar">
                        <div id="imaginary_container">
                          <div className="input-group stylish-input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search"
                            />
                            <span className="input-group-addon">
                              <button type="submit">
                                <i
                                  className="fa fa-search"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr/>
      </header>
    </>
  );
}
export default Header;
