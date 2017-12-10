import React, {Component} from 'react'

class Registration extends Component {
    render() {
        return (
            <div className="panel panel-default gray-border">
                <div className="panel-heading">Register</div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label for="fname">Firstname<span class="required">*</span>:</label>
                                </div>
                                <div className="col-lg-9">
                                    <input type="text" className="form-control" placeholder="Enter Your First Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label for="lname">Lastname<span class="required">*</span>:</label>
                                </div>
                                <div className="col-lg-9">
                                    <input type="text" className="form-control" placeholder="Enter Your Last Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label for="email">Email<span class="required">*</span>:</label>
                                </div>
                                <div className="col-lg-9">
                                    <input type="email" className="form-control" placeholder="Enter Your Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label for="user">UserName<span class="required">*</span>:</label>
                                </div>
                                <div className="col-lg-9">
                                    <input type="text" className="form-control" placeholder="Enter Your User Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label for="pwd">Password<span class="required">*</span>:</label>
                                </div>
                                <div className="col-lg-9">
                                    <input type="password" className="form-control" placeholder="Enter Your Password"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label for="cpwd">Confirm Password<span class="required">*</span>:</label>
                                </div>
                                <div className="col-lg-9">
                                    <input type="password" className="form-control"
                                           placeholder="Enter Your Confirm Password"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-lg-3">
                                    <label for="photo">Password<span class="required">*</span>:</label>
                                </div>
                                <div className="col-lg-9">
                                    <input type="file" className="filestyle" data-classNameIcon="icon-plus"
                                           data-buttonText="Find file"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                            </div>
                            <div className="col-lg-6">
                                <button type="submit" className="btn btn-info"> Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Registration;