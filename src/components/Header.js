import React from 'react';
import { Link } from 'react-router-dom'
import '../css/Header.css';

const Header = () => {
    return (
        <div className="Header">
            <div className="row">
                <div className="col text-center Header-inner">
                    <h1 className="display-4 mx-auto py-2">Enlighters Courses</h1>
                    <h2 className="my-3">Get <span className="enlightened">Enlightened ...</span></h2>
                    <button className="btn btn-danger check-it-button">
                        <Link to="/plans" className="text-white text-decoration-none">
                            Check it Out <i className="fas fa-angle-right"></i>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
