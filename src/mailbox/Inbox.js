import React, {Component} from 'react'
import ReadMail from './ReadMail'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';

class Inbox extends Component {
    render() {
        return (

            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Mailbox
                        <small>13 new messages</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li className="active">Mailbox</li>
                    </ol>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-md-3">
                            <Link to="/composeMail" className="btn btn-primary btn-block margin-bottom">Compose</Link>

                            <div className="box box-solid">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Folders</h3>

                                    <div className="box-tools">
                                        <button type="button" className="btn btn-box-tool" data-widget="collapse"><i
                                            className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="box-body no-padding">
                                    <ul className="nav nav-pills nav-stacked">
                                        <li className="active"><a href="#"><i className="fa fa-inbox"></i> Inbox
                                            <span className="label label-primary pull-right">12</span></a></li>
                                        <li><a href="#"><i className="fa fa-envelope-o"></i> Sent</a></li>
                                        <li><a href="#"><i className="fa fa-file-text-o"></i> Drafts</a></li>
                                        <li><a href="#"><i className="fa fa-filter"></i> Junk <span
                                            className="label label-warning pull-right">65</span></a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-trash-o"></i> Trash</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="box box-solid">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Labels</h3>

                                    <div className="box-tools">
                                        <button type="button" className="btn btn-box-tool" data-widget="collapse"><i
                                            className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="box-body no-padding">
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><a href="#"><i className="fa fa-circle-o text-red"></i> Important</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-circle-o text-yellow"></i>
                                            Promotions</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-circle-o text-light-blue"></i>
                                            Social</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Inbox</h3>

                                    <div className="box-tools pull-right">
                                        <div className="has-feedback">
                                            <input type="text" className="form-control input-sm"
                                                   placeholder="Search Mail"/>
                                            <span
                                                className="glyphicon glyphicon-search form-control-feedback"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body no-padding">
                                    <div className="mailbox-controls">
                                        <button type="button" className="btn btn-default btn-sm checkbox-toggle"><i
                                            className="fa fa-square-o"></i>
                                        </button>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-default btn-sm"><i
                                                className="fa fa-trash-o"></i></button>
                                            <button type="button" className="btn btn-default btn-sm"><i
                                                className="fa fa-reply"></i></button>
                                            <button type="button" className="btn btn-default btn-sm"><i
                                                className="fa fa-share"></i></button>
                                        </div>
                                        <button type="button" className="btn btn-default btn-sm"><i
                                            className="fa fa-refresh"></i></button>
                                        <div className="pull-right">
                                            1-50/200
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-default btn-sm"><i
                                                    className="fa fa-chevron-left"></i></button>
                                                <button type="button" className="btn btn-default btn-sm"><i
                                                    className="fa fa-chevron-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive mailbox-messages">
                                        <table className="table table-hover table-striped">
                                            <tbody>

                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td className="mailbox-star"><a href="#"><i
                                                    className="fa fa-star-o text-yellow"></i></a></td>
                                                <td className="mailbox-name"><Link to="/readmail">Alexander
                                                    Pierce</Link></td>
                                                <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying
                                                    to
                                                    find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i
                                                    className="fa fa-paperclip"></i>
                                                </td>
                                                <td className="mailbox-date">11 hours ago</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td className="mailbox-star"><a href="#"><i
                                                    className="fa fa-star-o text-yellow"></i></a></td>
                                                <td className="mailbox-name"><Link to="/readmail">Alexander
                                                    Pierce</Link></td>
                                                <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying
                                                    to
                                                    find a solution to this problem...
                                                </td>
                                                <td className="mailbox-attachment"><i
                                                    className="fa fa-paperclip"></i>
                                                </td>
                                                <td className="mailbox-date">11 hours ago</td>
                                            </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="box-footer no-padding">
                                    <div className="mailbox-controls">
                                        <button type="button" className="btn btn-default btn-sm checkbox-toggle"><i
                                            className="fa fa-square-o"></i>
                                        </button>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-default btn-sm"><i
                                                className="fa fa-trash-o"></i></button>
                                            <button type="button" className="btn btn-default btn-sm"><i
                                                className="fa fa-reply"></i></button>
                                            <button type="button" className="btn btn-default btn-sm"><i
                                                className="fa fa-share"></i></button>
                                        </div>
                                        <button type="button" className="btn btn-default btn-sm"><i
                                            className="fa fa-refresh"></i></button>
                                        <div className="pull-right">
                                            1-50/200
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-default btn-sm"><i
                                                    className="fa fa-chevron-left"></i></button>
                                                <button type="button" className="btn btn-default btn-sm"><i
                                                    className="fa fa-chevron-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        );
    }
}

export default Inbox;