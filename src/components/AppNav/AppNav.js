import React, { Component } from 'react';
import { Router, Link, BrowserRouter } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import navItems from '../../config/Sections.json';

class AppNav extends Component {
  render() {

    return (
      <BrowserRouter basename='/sections'>
        <Navbar color="light">
          {navItems.map((navItem, index) =>
            <Link to={`/${navItem.label.toLowerCase()}`} key={index}>
              { navItem.label } |
            </Link>
          )}
        </Navbar>
      </BrowserRouter>
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
