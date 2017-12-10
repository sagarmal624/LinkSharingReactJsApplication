import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './login/LandingPage';

class App extends Component {
    render() {
        return (
            <div className="App">
                <LandingPage/>
            </div>
        );
    }
}

export default App;
