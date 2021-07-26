import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';
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


// Functional solution:
// function AppNav({ handleNavClick }) {
//   return (
//     <Navbar color="light">
//       {navItems.map((navItem) =>
//         <a href="#" onClick={() => handleNavClick( navItem.value )} >
//           { navItem.label } |
//         </a>
//       )}
//     </Navbar>
//   );
// }
