import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutus" className="nav-link">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/perks" className="nav-link">
            Perks
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/jobs" className="nav-link">
            Jobs
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/applyform" className="nav-link">
            Apply Form
          </Link>
        </li>
        {/* <li className="nav-item">
          <div className="dropdown">
            <button className="dropbtn">Dropdown 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div> 
        </li> */}
      </ul>
    );
  }
  return null;
};


class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <Link to="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

        </div>
      </nav>
    );
  }
}

export default Header;
