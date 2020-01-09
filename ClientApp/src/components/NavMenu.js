import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./component.css";



export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
      return <>
        <div className="nav">
           
                <ul className="nav-ul">
                      <li className="navbar" >
                          <Link to={'/'} className="yellow-link">
                               Home
                            </Link>
                      </li>
                      <li className="navbar" >
                          <Link to={'/triviaquestions'} className="yellow-link">
                            Play Now
                            </Link>                
                      </li>
                      <li className="navbar" >
                            <Link to={'/selectcategories'} className="yellow-link">
                                Select
                            </Link>
                      </li>                
                  </ul>

        </div>
    </>
  }
}
