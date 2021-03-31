import React, {Component} from 'react';

import Auxilary from "../../hoc/Auxilary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerControl = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render() {
        return (
            <Auxilary>
                <div>
                    <Toolbar drawerToggller={this.sideDrawerToggleHandler} />
                    <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerControl}/>
                </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxilary>
        );
    }
}

export default Layout;