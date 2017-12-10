import React, {Component} from 'react'
import user from '../images/user.png'
import facebook from '../images/facebook.png'
import google from '../images/google.png'
import twtr from '../images/twtr.png'

class RecentShares extends Component {
    render() {
        return (
            <div className="panel panel-default gray-border">
                <div className="panel-heading">Recent Shares</div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-lg-2">
                            <span><img src={user} className="img-border"/></span>
                        </div>
                        <div className="col-lg-10">
                            <div className="row">
                                <div className="col-lg-4">
                                    SagarMalShankhala
                                </div>
                                <div className="col-lg-3">@ sagar</div>
                                <div className="col-lg-2"> 5min</div>
                                <div className="col-lg-3">
                                    <span className="topic-name-color">Grails</span>
                                </div>
                            </div>
                            Java Program to check mirror image of binary search tree or binary tree. Program to check
                            mirror copy of tree.
                            <br/>
                            <div className="row">
                                <div className="col-lg-9">
                                    <img src={facebook}/>
                                    <img src={twtr}/>
                                    <img src={google}/>
                                    <div className="col-lg-3">
                                        <a href="#"><u>View Post</u></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-2">
                                <span><img src={user} className="img-border"/></span>
                            </div>
                            <div className="col-lg-10">
                                <div className="row">
                                    <div className="col-lg-4">
                                        SagarMalShankhala
                                    </div>
                                    <div className="col-lg-3">@ sagar</div>
                                    <div className="col-lg-2"> 5min</div>
                                    <div className="col-lg-3">
                                        <span className="topic-name-color">Grails</span>
                                    </div>
                                </div>
                                Java Program to check mirror image of binary search tree or binary tree. Program to
                                check mirror copy of tree.
                                <br/>
                                <div className="row">
                                    <div className="col-lg-9">
                                        <img src={facebook}/>
                                        <img src={twtr}/>
                                        <img src={google}/>
                                    </div>
                                    <div className="col-lg-3">
                                        <a href="#"><u>View Post</u></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default RecentShares;