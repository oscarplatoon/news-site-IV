import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import navItems from '../../config/Sections.json';
import { Link } from 'react-router-dom';

function AppNav() {
    return (
        <Navbar color="light">
            {navItems.map((navItem) =>
                <Link key={navItem.value} to={`/sections/${navItem.value}`}>{navItem.label}</Link>
            )}
        </Navbar>
    );
}


export default AppNav;


