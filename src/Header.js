import React from 'react'
import { Navbar, NavItem} from 'react-bootstrap';
import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton';

import LoginButton from './LoginButton';


class Header extends React.Component {
    render() {
      return (
        <Navbar id="navbar" collapseOnSelect expand="lg" >
          <Navbar.Brand>Learn Black History</Navbar.Brand>
          <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
          <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
          {console.log(this.props.user)}
          {this.props.user ? (
            <>
              <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>
              <NavItem><Link to="/facts" className="nav-link">Facts</Link></NavItem>
              <LogoutButton logoutHandler={this.props.logoutHandler} />
            </>
          ) : <><LoginButton /></>}
        </Navbar>
      )
    }
  }
  
  export default Header;
  