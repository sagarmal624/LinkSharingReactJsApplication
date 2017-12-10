import React, {Component} from 'react';
import Login from './Login'
import Registration from './Registration'
import RecentShares from "./RecentShares";
import TopPost from './TopPost'

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row">

                <div class="col-sm-6">
                    <RecentShares/>
                    <TopPost/>
                </div>
                <div class="col-sm-6">
                    <Login/>
                    <Registration/>

                </div>
            </div>

        );
    }
}

export default Home;