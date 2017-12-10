import React, {Component, PropTypes} from 'react'
import user4 from '../images/user4-128x128.jpg'

class Topic extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="box box-success">
                <div className="box-header">
                    <i className="fa fa-edit"></i>

                    <h3 className="box-title">Trending Topics</h3>

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
                            <table>
                                <tr>
                                    <th><a href="#" className="name">@Sagar</a></th>
                                    <th><a href="#" className="name col-sm-3">Subscriptions</a></th>
                                    <th><a href="#" className="name">Post</a></th>
                                </tr>

                                <tr>
                                    <td><a href="#" className="name">UnSubscribe</a></td>
                                    <td><span className="badge col-sm-offset-3">50</span></td>
                                    <td><span className="badge">50</span></td>

                                </tr>

                            </table>

                        </div>
                        <div className="row attachment">
                            <div className="col-sm-4">
                                <select className="form-control">
                                    <option>Serious</option>
                                    <option>Non Serious</option>
                                </select>
                            </div>
                            <div className="col-sm-4">

                                <select className="form-control">
                                    <option>Private</option>
                                    <option>Public</option>
                                </select>
                            </div>
                            <div className="col-sm-4">

                                <span className="glyphicon glyphicon-envelope col-sm-1"></span>
                                <span className="glyphicon glyphicon-file col-sm-1"></span>
                                <span className="glyphicon glyphicon-trash col-sm-1"></span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="box-footer">
                    <div className="input-group">
                        <input className="form-control" placeholder="Spring"/>

                        <div className="input-group-btn">
                            <button type="button" className="btn btn-success"><i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topic;