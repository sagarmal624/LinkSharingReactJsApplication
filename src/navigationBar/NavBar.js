import React, {Component} from "react";
import "./NavBar.css"
import SideBar from '../sidebar/SideBar'
import Header from './Header'

class NavBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header/>
                <SideBar/>
            </div>

        );
    }
}

export default NavBar;
