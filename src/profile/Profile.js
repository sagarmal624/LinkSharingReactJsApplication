import React, {Component} from 'react';
import user4 from '../images/user4-128x128.jpg'

class Profile extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        User Profile
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li><a href="#">Examples</a></li>
                        <li className="active">User profile</li>
                    </ol>
                </section>

                <section className="content">

                    <div className="row">
                        <div className="col-md-3">

                            <div className="box box-primary">
                                <div className="box-body box-profile">
                                    <img className="profile-user-img img-responsive img-circle"
                                         src={user4} alt="User profile picture"/>

                                    <h3 className="profile-username text-center">Sagar Mal Shankhala</h3>

                                    <p className="text-muted text-center">Software Engineer</p>

                                    <ul className="list-group list-group-unbordered">
                                        <li className="list-group-item">
                                            <b>Followers</b> <a className="pull-right">1,322</a>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Following</b> <a className="pull-right">543</a>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Friends</b> <a className="pull-right">13,287</a>
                                        </li>
                                    </ul>

                                    <a href="#" className="btn btn-primary btn-block"><b>Follow</b></a>
                                </div>
                            </div>

                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">About Me</h3>
                                </div>
                                <div className="box-body">
                                    <strong><i className="fa fa-book margin-r-5"></i> Education</strong>

                                    <p className="text-muted">
                                        MCA in Computer Science from the Bit Mesra,Ranchi
                                    </p>

                                    <hr/>

                                    <strong><i className="fa fa-map-marker margin-r-5"></i> Location</strong>

                                    <p className="text-muted">Ras, Pali,Rajasthan</p>

                                    <hr/>

                                    <strong><i className="fa fa-pencil margin-r-5"></i> Skills</strong>

                                    <p>
                                        <span className="label label-danger">UI Design</span>
                                        <span className="label label-success">Coding</span>
                                        <span className="label label-info">Javascript</span>
                                        <span className="label label-warning">PHP</span>
                                        <span className="label label-primary">Node.js</span>
                                    </p>

                                    <hr/>

                                    <strong><i className="fa fa-file-text-o margin-r-5"></i> Notes</strong>

                                    <p>Shell Sort Shell sort is a sorting algorithm, devised by Donald Shell in 1959,
                                        that is a generalization of insertion sort, which exploits the fact that
                                        insertion sort </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="nav-tabs-custom">
                                <ul className="nav nav-tabs">
                                    <li className="active"><a href="#activity" data-toggle="tab">Activity</a></li>
                                    <li><a href="#timeline" data-toggle="tab">Timeline</a></li>
                                    <li><a href="#settings" data-toggle="tab">Settings</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className="active tab-pane" id="activity">
                                        <div className="post">
                                            <div className="user-block">
                                                <img className="img-circle img-bordered-sm"
                                                     src={user4} alt="user image"/>
                                                <span className="username">
                          <a href="#">Sagar</a>
                          <a href="#" className="pull-right btn-box-tool"><i className="fa fa-times"></i></a>
                        </span>
                                                <span className="description">Shared publicly - 7:30 PM today</span>
                                            </div>
                                            <p>
                                                Shell Sort Shell sort is a sorting algorithm, devised by Donald Shell in
                                                1959, that is a generalization of insertion sort, which exploits the
                                                fact that insertion sort
                                            </p>
                                            <ul className="list-inline">
                                                <li><a href="#" className="link-black text-sm"><i
                                                    className="fa fa-share margin-r-5"></i> Share</a></li>
                                                <li><a href="#" className="link-black text-sm"><i
                                                    className="fa fa-thumbs-o-up margin-r-5"></i> Like</a>
                                                </li>
                                                <li className="pull-right">
                                                    <a href="#" className="link-black text-sm"><i
                                                        className="fa fa-comments-o margin-r-5"></i> Comments
                                                        (5)</a></li>
                                            </ul>

                                            <input className="form-control input-sm" type="text"
                                                   placeholder="Type a comment"/>
                                        </div>

                                        <div className="post clearfix">
                                            <div className="user-block">
                                                <img className="img-circle img-bordered-sm"
                                                     src={user4} alt="User Image"/>
                                                <span className="username">
                          <a href="#">Mamta</a>
                          <a href="#" className="pull-right btn-box-tool"><i className="fa fa-times"></i></a>
                        </span>
                                                <span className="description">Sent you a message - 3 days ago</span>
                                            </div>
                                            <p>
                                                Shell Sort Shell sort is a sorting algorithm, devised by Donald Shell in
                                                1959, that is a generalization of insertion sort, which exploits the
                                                fact that insertion sort
                                            </p>

                                            <form className="form-horizontal">
                                                <div className="form-group margin-bottom-none">
                                                    <div className="col-sm-9">
                                                        <input className="form-control input-sm"
                                                               placeholder="Response"/>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <button type="submit"
                                                                className="btn btn-danger pull-right btn-block btn-sm">
                                                            Send
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="post">
                                            <div className="user-block">
                                                <img className="img-circle img-bordered-sm"
                                                     src={user4} alt="User Image"/>
                                                <span className="username">
                          <a href="#">Adam Jones</a>
                          <a href="#" className="pull-right btn-box-tool"><i className="fa fa-times"></i></a>
                        </span>
                                                <span className="description">Posted 5 photos - 5 days ago</span>
                                            </div>
                                            <div className="row margin-bottom">
                                                <div className="col-sm-6">
                                                    <img className="img-responsive" src={user4}
                                                         alt="Photo"/>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <img className="img-responsive"
                                                                 src={user4}
                                                                 alt="Photo"/>
                                                            <br/>
                                                            <img className="img-responsive" src={user4} alt="Photo"/>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <img className="img-responsive"
                                                                 src={user4}
                                                                 alt="Photo"/>
                                                            <br/>
                                                            <img className="img-responsive"
                                                                 src={user4} alt="Photo"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="list-inline">
                                                <li><a href="#" className="link-black text-sm"><i
                                                    className="fa fa-share margin-r-5"></i> Share</a></li>
                                                <li><a href="#" className="link-black text-sm"><i
                                                    className="fa fa-thumbs-o-up margin-r-5"></i> Like</a>
                                                </li>
                                                <li className="pull-right">
                                                    <a href="#" className="link-black text-sm"><i
                                                        className="fa fa-comments-o margin-r-5"></i> Comments
                                                        (5)</a></li>
                                            </ul>

                                            <input className="form-control input-sm" type="text"
                                                   placeholder="Type a comment"/>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="timeline">
                                        <ul className="timeline timeline-inverse">
                                            <li className="time-label">
                        <span className="bg-red">
                          10 Feb. 2014
                        </span>
                                            </li>
                                            <li>
                                                <i className="fa fa-envelope bg-blue"></i>

                                                <div className="timeline-item">
                                                    <span className="time"><i
                                                        className="fa fa-clock-o"></i> 12:05</span>

                                                    <h3 className="timeline-header"><a href="#">Support Team</a> sent
                                                        you an
                                                        email</h3>

                                                    <div className="timeline-body">
                                                        Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                                        weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                                        jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo
                                                        kaboodle
                                                        quora plaxo ideeli hulu weebly balihoo...
                                                    </div>
                                                    <div className="timeline-footer">
                                                        <a className="btn btn-primary btn-xs">Read more</a>
                                                        <a className="btn btn-danger btn-xs">Delete</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <i className="fa fa-user bg-aqua"></i>

                                                <div className="timeline-item">
                                                    <span className="time"><i className="fa fa-clock-o"></i> 5 mins ago</span>

                                                    <h3 className="timeline-header no-border"><a href="#">Sarah
                                                        Young</a>
                                                        accepted your friend request
                                                    </h3>
                                                </div>
                                            </li>
                                            <li>
                                                <i className="fa fa-comments bg-yellow"></i>

                                                <div className="timeline-item">
                                                    <span className="time"><i className="fa fa-clock-o"></i> 27 mins ago</span>

                                                    <h3 className="timeline-header"><a href="#">Jay White</a> commented
                                                        on
                                                        your post</h3>

                                                    <div className="timeline-body">
                                                        Take me to your leader!
                                                        Switzerland is small and neutral!
                                                        We are more like Germany, ambitious and misunderstood!
                                                    </div>
                                                    <div className="timeline-footer">
                                                        <a className="btn btn-warning btn-flat btn-xs">View comment</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="time-label">
                        <span className="bg-green">
                          3 Jan. 2014
                        </span>
                                            </li>
                                            <li>
                                                <i className="fa fa-camera bg-purple"></i>

                                                <div className="timeline-item">
                                                    <span className="time"><i className="fa fa-clock-o"></i> 2 days ago</span>

                                                    <h3 className="timeline-header"><a href="#">Mina Lee</a> uploaded
                                                        new
                                                        photos</h3>

                                                    <div className="timeline-body">
                                                        <img src="http://placehold.it/150x100" alt="..."
                                                             className="margin"/>
                                                        <img src="http://placehold.it/150x100" alt="..."
                                                             className="margin"/>
                                                        <img src="http://placehold.it/150x100" alt="..."
                                                             className="margin"/>
                                                        <img src="http://placehold.it/150x100" alt="..."
                                                             className="margin"/>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <i className="fa fa-clock-o bg-gray"></i>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="tab-pane" id="settings">
                                        <form className="form-horizontal">
                                            <div className="form-group">
                                                <label for="inputName" className="col-sm-2 control-label">Name</label>

                                                <div className="col-sm-10">
                                                    <input type="email" className="form-control" id="inputName"
                                                           placeholder="Name"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="inputEmail" className="col-sm-2 control-label">Email</label>

                                                <div className="col-sm-10">
                                                    <input type="email" className="form-control" id="inputEmail"
                                                           placeholder="Email"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="inputName" className="col-sm-2 control-label">Name</label>

                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" id="inputName"
                                                           placeholder="Name"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="inputExperience"
                                                       className="col-sm-2 control-label">Experience</label>

                                                <div className="col-sm-10">
                                                    <textarea className="form-control" id="inputExperience"
                                                              placeholder="Experience"></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="inputSkills"
                                                       className="col-sm-2 control-label">Skills</label>

                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" id="inputSkills"
                                                           placeholder="Skills"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-offset-2 col-sm-10">
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox"/> I agree to the <a href="#">terms
                                                            and
                                                            conditions</a>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-offset-2 col-sm-10">
                                                    <button type="submit" className="btn btn-danger">Submit</button>
                                                </div>
                                            </div>
                                        </form>
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

export default Profile;