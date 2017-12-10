import React, {Component} from "react";

import user4 from '../images/user4-128x128.jpg'
import user3 from '../images/user3-128x128.jpg'
import user2 from '../images/user2-160x160.jpg'

class Post extends Component {
    constructor() {
        super();

    }

    render() {
        return (

            <div className="box box-success">
                <div className="box-header">
                    <i className="fa fa-comments-o"></i>

                    <h3 className="box-title">Post</h3>

                    <div className="box-tools pull-right" data-toggle="tooltip" title="Status">
                        <div className="btn-group" data-toggle="btn-toggle">
                            <button type="button" className="btn btn-default btn-sm active"><i
                                className="fa fa-square text-green"></i>
                            </button>
                            <button type="button" className="btn btn-default btn-sm"><i
                                className="fa fa-square text-red"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="box-body chat" id="chat-box">
                    <div className="item">
                        <img src={user4} alt="user image" className="online"/>

                        <p className="message">
                            <a href="#" className="name">
                                <small className="text-muted pull-right"><i className="fa fa-clock-o"></i> 2:15</small>
                                Mike Doe
                            </a>
                            I would like to meet you to discuss the latest news about
                            the arrival of the new theme. They say it is going to be one the
                            best themes on the market
                        </p>
                        <div className="attachment">
                            <h4>Attachments:</h4>

                            <p className="filename">
                                Theme-thumbnail-image.jpg
                            </p>

                            <div className="pull-right">
                                <button type="button" className="btn btn-primary btn-sm btn-flat">Open</button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={user4} alt="user image" className="online"/>

                        <p className="message">
                            <a href="#" className="name">
                                <small className="text-muted pull-right"><i className="fa fa-clock-o"></i> 2:15</small>
                                Mike Doe
                            </a>
                            I would like to meet you to discuss the latest news about
                            the arrival of the new theme. They say it is going to be one the
                            best themes on the market
                        </p>
                        <div className="attachment">
                            <h4>Attachments:</h4>

                            <p className="filename">
                                Theme-thumbnail-image.jpg
                            </p>

                            <div className="pull-right">
                                <button type="button" className="btn btn-primary btn-sm btn-flat">Open</button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={user4} alt="user image" className="online"/>

                        <p className="message">
                            <a href="#" className="name">
                                <small className="text-muted pull-right"><i className="fa fa-clock-o"></i> 2:15</small>
                                Mike Doe
                            </a>
                            I would like to meet you to discuss the latest news about
                            the arrival of the new theme. They say it is going to be one the
                            best themes on the market
                        </p>
                        <div className="attachment">
                            <h4>Attachments:</h4>

                            <p className="filename">
                                Theme-thumbnail-image.jpg
                            </p>

                            <div className="pull-right">
                                <button type="button" className="btn btn-primary btn-sm btn-flat">Open</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Post;
