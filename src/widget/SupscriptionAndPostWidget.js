import React, {Component, PropTypes} from 'react'
import user4 from '../images/user4-128x128.jpg'

class SupscriptionAndPostWidget extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="box box-success">
                <div className="box-header">
                    <i className="fa fa-user"></i>
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
                                Sagar Mal Shankhala
                            </a>
                        </p>
                        <div className="attachment">
                            <table>
                                <tr>
                                    <th><a href="#" className="name">Subscriptions</a></th>
                                    <th><a href="#" className="name col-sm-3">Topics</a></th>
                                </tr>

                                <tr>
                                    <td><span className="badge">50</span></td>
                                    <td><span className="badge col-sm-offset-3">50</span></td>

                                </tr>

                            </table>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default SupscriptionAndPostWidget;