import React, {Component} from 'react'

class ComposeMail extends Component {
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
                            <a href="mailbox.html" className="btn btn-primary btn-block margin-bottom">Back to Inbox</a>

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
                                        <li><a href="mailbox.html"><i className="fa fa-inbox"></i> Inbox
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
                                        <li><a href="#"><i className="fa fa-circle-o text-red"></i> Important</a></li>
                                        <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> Promotions</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-circle-o text-light-blue"></i> Social</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Compose New Message</h3>
                                </div>
                                <div className="box-body">
                                    <div className="form-group">
                                        <input className="form-control" placeholder="To:"/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Subject:"/>
                                    </div>
                                    <div className="form-group">
                    <textarea id="compose-textarea" className="form-control">
                      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                        was born and I will give you a complete account of the system, and expound the actual teachings
                        of the great explorer of the truth, the master-builder of human happiness. No one rejects,
                        dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
                        how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again
                        is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                        but because occasionally circumstances occur in which toil and pain can procure him some great
                        pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,
                        except to obtain some advantage from it? But who has any right to find fault with a man who
                        chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that
                        produces no resultant pleasure? On the other hand, we denounce with righteous indignation and
                        dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so
                        blinded by desire, that they cannot foresee</p>
                    </textarea>
                                    </div>
                                    <div className="form-group">
                                        <div className="btn btn-default btn-file">
                                            <i className="fa fa-paperclip"></i> Attachment
                                            <input type="file" name="attachment"/>
                                        </div>
                                        <p className="help-block">Max. 32MB</p>
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <div className="pull-right">
                                        <button type="button" className="btn btn-default"><i
                                            className="fa fa-pencil"></i> Draft
                                        </button>
                                        <button type="submit" className="btn btn-primary"><i
                                            className="fa fa-envelope-o"></i> Send
                                        </button>
                                    </div>
                                    <button type="reset" className="btn btn-default"><i className="fa fa-times"></i>
                                        Discard
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}

export default ComposeMail;