import React from 'react';
import { Link } from 'react-router-dom'
import "../css/Academy.css";
import profImg from '../assets/academy.jpg';

const Academy = () => {
    return (
        <div className="container-fluid Academy">
            <div className="row d-flex">
                <div className="col-sm-6 text-center align-self-center">
                    <h2>The Best Tutors You'll Meet Ever</h2>
                    <p>Take The Chance Faster & Enjoy it</p>
                    <button className="btn btn-danger">
                        <Link to="/demo" className="text-white text-decoration-none">
                            Try it Now
                        </Link>
                    </button>
                </div>
                <div className="col-sm-6 professor">
                    <img src={profImg} alt="Professor Illustrate" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default Academy;
