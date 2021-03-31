import React from "react";

import NavigationItem from './NavItem/NavigationItem'
import classes from './NavigationItems.module.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>BurgerBuilder</NavigationItem>
        <NavigationItem link="/checkout">Check Out</NavigationItem>

    </ul>
);

export default navigationItems;