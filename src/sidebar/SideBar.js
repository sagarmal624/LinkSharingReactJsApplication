import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import user from '../images/user2-160x160.jpg'
import Dashboard from "../dashboard/Dashboard";
import Inbox from "../mailbox/Inbox";
import ReadMail from "../mailbox/ReadMail";
import ComposeMail from "../mailbox/ComposeMail";
import Topics from "../topic/index";
import Profile from "../profile/Profile";

class SideBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <div>
                    <aside className="main-sidebar">

                        <section className="sidebar">

                            <div className="user-panel">
                                <div className="pull-left image">
                                    <img src={user} className="img-circle"
                                         alt="User Image"/>
                                </div>
                                <div className="pull-left info">
                                    <p>Sagar Mal Shankhala</p>
                                    <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                                </div>
                            </div>

                            <form action="#" method="get" className="sidebar-form">
                                <div className="input-group">
                                    <input type="text" name="q" className="form-control" placeholder="Search..."/>
                                    <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i
                    className="fa fa-search"></i>
                </button>
              </span>
                                </div>
                            </form>

                            <ul className="sidebar-menu" data-widget="tree">
                                <li className="header">MAIN NAVIGATION</li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                                        <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/mailbox">
                                        <i className="fa fa-envelope"></i> <span>Inbox</span>
                                        <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
                                    </Link>


                                </li>
                                <li>
                                    <Link to="/topics">
                                        <i className="fa fa-edit"></i> <span>Topics</span>
                                        <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/posts">
                                        <i className="fa fa-user"></i> <span>Posts</span>
                                        <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-user"></i> <span>Admin</span>
                                        <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/profile">
                                        <i className="fa fa-user"></i> <span>Profile</span>
                                        <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
                                    </Link>

                                </li>
                            </ul>
                        </section>

                    </aside>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route path="/mailbox" component={Inbox}/>
                    <Route path="/readmail" component={ReadMail}/>
                    <Route path="/composeMail" component={ComposeMail}/>
                    <Route path="/topics" component={Topics}/>
                    <Route path="/profile" component={Profile}/>
                </div>
            </Router>

        );
    }
}

export default SideBar;
