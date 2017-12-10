import React, {Component} from 'react'
import Post from '../post/Post'
import Subscriptions from './Subscriptions'
import SupscriptionAndPostWidget from '../widget/SupscriptionAndPostWidget'
import Topic from '../topic/Topic'
import './Dashboard.css'

class Dashboard extends Component {
    render() {
        return (
            <div className="content-wrapper">

                <section className="content-header">
                    <h1>
                        Dashboard
                        <small>Blank example to the fixed layout</small>
                    </h1>

                </section>


                <section className="content col-lg-5">
                    <SupscriptionAndPostWidget/>
                    <Post/>
                </section>
                <section className="content col-lg-7">
                    <Subscriptions/>
                    <Topic/>
                </section>
            </div>
        );
    }
}

export default Dashboard;