import React, {Component} from 'react'
import Topic from './Topic'

class Topics extends Component {
    render() {
        return (
            <div className="content-wrapper">

                <section className="content-header">
                    <h1>
                        <span className="col-lg-6">Trending Topics</span>
                        <div className="input-group col-lg-6">
                            <input className="form-control" placeholder="Spring"/>

                            <div className="input-group-btn">
                                <button type="button" className="btn btn-success"><i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </h1>


                </section>


                <section className="content col-lg-5">
                    <Topic/>
                </section>
                <section className="content col-lg-7">
                    <Topic/>
                </section>
            </div>
        );
    }
}

export default Topics;