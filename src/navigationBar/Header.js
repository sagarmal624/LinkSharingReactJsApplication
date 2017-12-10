import React, {Component} from "react";
import {
    Link
} from 'react-router-dom'

import user from '../images/user2-160x160.jpg'

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header className="main-header">
                <a href="../../index2.html" className="logo">
                    <span className="logo-mini"><b>A</b>LT</span>
                    <span className="logo-lg"><b>Link</b>Sharing</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </a>

                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="label label-success">4</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 4 messages</li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src={user} className="img-circle"
                                                             alt="User Image"/>
                                                    </div>
                                                    <h4>
                                                        Support Team
                                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer"><a href="#">See All Messages</a></li>
                                </ul>
                            </li>
                            <li className="dropdown notifications-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-bell-o"></i>
                                    <span className="label label-warning">10</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 10 notifications</li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-users text-aqua"></i> 5 new members
                                                    joined today
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer"><a href="#">View all</a></li>
                                </ul>
                            </li>
                            <li className="dropdown tasks-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-flag-o"></i>
                                    <span className="label label-danger">9</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 9 tasks</li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <h3>
                                                        Design some buttons
                                                        <small className="pull-right">20%</small>
                                                    </h3>
                                                    <div className="progress xs">
                                                        <div className="progress-bar progress-bar-aqua"
                                                             role="progressbar"
                                                             aria-valuenow="20" aria-valuemin="0"
                                                             aria-valuemax="100">
                                                            <span className="sr-only">20% Complete</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer">
                                        <a href="#">View all tasks</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown user user-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <img src={user} className="user-image"
                                         alt="User Image"/>
                                    <span className="hidden-xs">Sagar Mal Shankhala</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="user-header">
                                        <img src={user} className="img-circle"
                                             alt="User Image"/>

                                        <p>
                                            Sagar Mal Shankhala - Full Stack Developer
                                            <small>Member since Nov. 2012</small>
                                        </p>
                                    </li>
                                    <li className="user-body">
                                        <div className="row">
                                            <div className="col-xs-4 text-center">
                                                <a href="#">Followers</a>
                                            </div>
                                            <div className="col-xs-4 text-center">
                                                <a href="#">Sales</a>
                                            </div>
                                            <div className="col-xs-4 text-center">
                                                <a href="#">Friends</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="user-footer">
                                        <div className="pull-left">
                                            <Link to="/profile"
                                                  className="btn btn-default btn-flat">Profile</Link>
                                        </div>

                                        <div className="pull-right">
                                            <button className="btn btn-default btn-flat">Sign out
                                            </button>

                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
