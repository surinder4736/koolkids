import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav">

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
      </ul>
    );
  }
  return null;
};


class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <nav className="navbar navbar-light">
            <div className="container">

            <LoggedOutView currentUser={this.props.currentUser} />

            </div>
        </nav>
      </div>  
      
    );
  }
}

export default Footer;
