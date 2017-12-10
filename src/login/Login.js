import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

import NavBar from '../navigationBar/NavBar'

const AuthController = () => (
    <Router>
        <div>
            <AuthButton/>

            <Route path="/login" component={Login}/>
            <PrivateRoute path="/" component={Protected}/>
        </div>
    </Router>
)
const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100) // fake async
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

const AuthButton = withRouter(({history}) => (
    fakeAuth.isAuthenticated ? (
        <NavBar/>
    ) : (
        <p className="hide">You are not logged in.</p>
    )
))

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        fakeAuth.isAuthenticated ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login',
            }}/>
        )
    )}/>
)

const Protected = () => <h3 className="hide">Protected</h3>

class Login extends React.Component {
    state = {
        redirectToReferrer: false
    }

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({redirectToReferrer: true})
        })
    }

    render() {
        // const {from} = this.props.location.state || {from: {pathname: '/'}}
        const {redirectToReferrer} = this.state

        if (redirectToReferrer) {
            return (
                <Redirect to={"/dashboard"}/>
            )
        }

        return (
            <div className="login-box">
                <div className="login-logo">
                    <a href="../../index2.html"><b>Link</b>Sharing</a>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Sign in to start your session</p>

                    <form action="/dashboard" method="get">
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" placeholder="Email"/>
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Password"/>
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                                <div className="checkbox icheck">
                                    <label>
                                        <input type="checkbox"/> Remember Me
                                    </label>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <button type="button" onClick={this.login}
                                        className="btn btn-primary btn-block btn-flat">Sign In
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="social-auth-links text-center">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i
                            className="fa fa-facebook"></i> Sign in using
                            Facebook</a>
                        <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i
                            className="fa fa-google-plus"></i> Sign in using
                            Google+</a>
                    </div>

                    <a href="#">I forgot my password</a><br/>
                    <a href="register.html" className="text-center">Register a new membership</a>

                </div>
            </div>

        )
    }
}

export default AuthController