import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

class DemoPage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col bg-danger py-3">
                        <Link to="/" className="text-white text-decoration-none">
                            <i className="fas fa-arrow-left"></i> Home
                        </Link>
                    </div>
                </div>
                <div className="row py-4 px-2">
                    <div className="col">
                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header bg-danger" id="headingOne">
                                    <h2 className="mb-0">
                                        <button className="btn btn-danger text-white" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Module One
                                        </button>
                                    </h2>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body text-dark">
                                        <div className="row">
                                            <div className="col col-md-8">
                                                <video width="100%" height="100%" controls>
                                                    <source src={video1} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div className="col col-md-4 d-none d-md-block border border-danger p-0">
                                                <div className="bg-dark text-white p-3">
                                                    <h5 className="text-center">Module Videos</h5>
                                                </div>
                                                <div className="mt-3">
                                                    <button className="btn btn-danger btn-block">
                                                        video
                                                    </button>
                                                    <button className="btn btn-danger btn-block">
                                                        video
                                                    </button><button className="btn btn-danger btn-block">
                                                        video
                                                    </button>
                                                    <button className="btn btn-danger btn-block">
                                                        video
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header bg-danger" id="headingTwo">
                                    <h2 className="mb-0">
                                        <button className="btn btn-danger text-white collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Module Two
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col col-md-8">
                                                <video width="100%" height="100%" controls>
                                                    <source src={video2} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div className="col col-md-4 d-none d-md-block border border-danger p-0">
                                                <div className="bg-dark text-white p-3">
                                                    <h5 className="text-center">Module Videos</h5>
                                                </div>
                                                <div className="mt-3">
                                                    <button className="btn btn-danger btn-block">
                                                        video
                                                    </button>
                                                    <button className="btn btn-danger btn-block">
                                                        video
                                                    </button><button className="btn btn-danger btn-block">
                                                        video
                                                    </button>
                                                    <button className="btn btn-danger btn-block">
                                                        video
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-danger btn-block">
                            <Link to="/reg" className="text-white text-decoration-none">Get Full Access</Link>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default DemoPage;