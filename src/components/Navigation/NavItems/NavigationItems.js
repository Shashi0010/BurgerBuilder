import React from "react";

import NavigationItem from './NavItem/NavigationItem'
import classes from './NavigationItems.module.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">BurgerBuilder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>

    </ul>
);

export default navigationItems;