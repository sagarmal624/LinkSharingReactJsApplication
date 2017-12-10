import React, {Component} from 'react'
import user from '../images/user.png'
import facebook from '../images/facebook.png'
import google from '../images/google.png'
import twtr from '../images/twtr.png'

class TopPost extends Component {
    render() {
        return (
            <div class="panel panel-default gray-border">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-lg-9">Top Posts
                        </div>
                        <div class="col-lg-2">
                            <div class="dropdown" data-placement="top" data-toggle="tooltipdropdown"
                                 title="Dropdown Will Have Today, 1 week , 1 month,1 year. " data-placement="right">
                                <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                                    Today
                                    <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Yesterday</a></li>
                                    <li><a href="#">1 Week</a></li>
                                    <li><a href="#">1 Month</a></li>
                                    <li><a href="#">1 year</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-2">
                            <span><img src={user} className="img-border"/></span>
                        </div>
                        <div class="col-lg-10">
                            <div class="row">
                                <div class="col-lg-4">
                                    SagarMalShankhala
                                </div>
                                <div class="col-lg-3">@ sagar</div>
                                <div class="col-lg-2"> 5min</div>
                                <div class="col-lg-3">
                                    <span className="topic-name-color">Grails</span>
                                </div>
                            </div>
                            Java Program to check mirror image of binary search tree or binary tree. Program to check
                            mirror copy of tree.
                            <div class="row">
                                <div class="col-lg-9">
                                    <img src={facebook}/>
                                    <img src={twtr}/>
                                    <img src={google}/>
                                </div>
                                <div class="col-lg-3">
                                    <a href="#"><u>View Post</u></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default TopPost;