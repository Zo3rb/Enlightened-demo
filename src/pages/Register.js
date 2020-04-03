import React, { Component } from 'react';
import '../css/Register.css';
import { Link } from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <div className="container-fluid Register">
                <div className="row">
                    <div className="col bg-danger py-3">
                        <Link to="/" className="text-white text-decoration-none"><i className="fas fa-arrow-left"></i> Home</Link>
                    </div>
                    <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3 p-sm-5 py-md-5 px-md-3 reg-form text-white text-center form-container">
                        <h3 className="text-left font-weight-bold mb-3">Subscribe</h3>
                        <form>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineRadio1">
                                    <i className="fab fa-cc-visa fa-2x"></i>
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="form-check-label" htmlFor="inlineRadio2">
                                    <i className="fab fa-cc-paypal fa-2x"></i>
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                <label className="form-check-label" htmlFor="inlineRadio3">
                                    <i className="fab fa-cc-stripe fa-2x"></i>
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                                <label className="form-check-label" htmlFor="inlineRadio4">
                                    <i className="fab fa-cc-mastercard fa-2x"></i>
                                </label>
                            </div>
                            <hr className="bg-white" />
                            <div className="form-group">
                                <input type="text" className="form-control mb-2 bg-dark text-white border-0" placeholder="Register Name" />
                                <input type="password" className="form-control mb-2 bg-dark text-white border-0" placeholder="Password" />
                                <input type="number" className="form-control mb-2 bg-dark text-white border-0" placeholder="Pin of The Card" />
                                <input type="date" className="form-control mb-2 bg-dark text-white border-0" />
                            </div>
                            <div className="form-group form-check text-left">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <small className="form-check-label" htmlFor="exampleCheck1">Agree All the Terms</small>
                            </div>
                            <select className="custom-select">
                                <option defaultValue>Select The Plan</option>
                                <option value="1">Free Plan</option>
                                <option value="2">Standard Plan</option>
                                <option value="3">Premium Plan</option>
                            </select>
                            <button className="btn btn-danger btn-block mt-3">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;