import React, {Component} from 'react'
import NavBar from '../navigationBar/NavBar'
import AuthController from './Login'

class LandingPage extends Component {
    constructor() {
        super();
    }

    render() {
        function isLogined() {
            return false;
        }

        return (
            <div>{
                isLogined() ? <NavBar/> : <AuthController/>
            }
            </div>
        );
    }
}

export default LandingPage;