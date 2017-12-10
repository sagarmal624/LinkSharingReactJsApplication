import React, {Component} from 'react';

class Settings extends Component {
    render() {
        return (

                    <div className="panel panel-default gray-border">
                        <div className="panel-heading gray-border">Change Password</div>
                        <div className="panel-body">
                            <div className="row">
                                <form>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-lg-1"></div>
                                            <div className="col-lg-3">
                                                <label for="ename">Password<span
                                                    className="required">*</span>:</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="password" className="form-control" id="cpassword"
                                                       placeholder="Enter  password"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-lg-1"></div>
                                            <div className="col-lg-3">
                                                <label for="lname">Confirm Password<span className="required">*</span>:</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control" id="confrimpassword"
                                                       placeholder="enter confirm password"/>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-info col-lg-offset-7">Update</button>
                                </form>
                            </div>
                        </div>
                    </div>

        );
    }
}

export default Settings;