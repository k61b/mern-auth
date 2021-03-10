import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <Router>
        <div className="navbar-fixed">
          <nav className="z-depth-0">
            <div className="nav-wrapper white">
              <Link
                to="/"
                style={{
                  fontFamily: "monospace"
                }}
                className="col s5 brand-logo center black-text"
              >
                <i className="material-icons">code</i>
              MERN
            </Link>
            </div>
          </nav>
        </div>
      </Router>
    );
  }
}

export default Navbar;