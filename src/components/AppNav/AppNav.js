import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import { Link } from "react-router-dom"
import navItems from '../../config/Sections.json';

class AppNav extends Component {
  render() {
    

    return (
      <Navbar color="light">
         {
            navItems.map((navItem, index) =>
              <Link to={`/sections/${navItem.label.toLowerCase()}`} key={index}>
                | { navItem.label } |
              </Link>
          )}
      </Navbar>
    )
  }
}

export default AppNav;

