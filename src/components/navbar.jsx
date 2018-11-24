import React, { Component } from "react";

// standard component, has no state
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="m-2 badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

// When there is no local state it can
// also be a Stateless Functional Component instead of a class
// Then it will have no this, but has props passed in instead
//
// const NavBar = (props) => {
//     return ( ... )
// }

export default NavBar;
