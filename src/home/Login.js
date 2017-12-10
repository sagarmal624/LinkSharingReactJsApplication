import React, {Component} from 'react';
import './Home.css'

class Login extends Component {
    render() {
        return (
            <div>
                <div className="panel panel-default gray-border">
                    <div className="panel-heading">Login</div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <label for="user">UserName<span className="required">*</span>:</label>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="form-group has-feedback">
                                            <span className="glyphicon glyphicon-user form-control-feedback"></span>
                                            <input type="text" className="form-control gray-border"
                                                   placeholder="Enter Your Name"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <label for="pwd">Password<span className="required">*</span>:</label>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="form-group has-feedback">
                                            <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
                                            <input type="password" className="form-control gray-border"
                                                   placeholder="Enter  Password"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <button type="button" className="btn btn-link"><u>Forgot Password</u></button>
                                </div>
                                <div className="col-lg-6">
                                    <button type="submit" className="btn btn-info"> Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;