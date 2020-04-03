import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid py-3 border-top border-white Footer">
                <p className="mt-3">Questions ? 01123456789 <i className="fas fa-phone"></i></p>
                <div className="row">
                    <ul className="col-sm-12 col-md-6 col-lg-3 py-2 list-unstyled">
                        <li className="py-2"><a href="/">FAQ</a></li>
                        <li className="py-2"><a href="/">Investor Relation</a></li>
                        <li className="py-2"><a href="/">Ways to Subscribe</a></li>
                        <li className="py-2"><a href="/">Corporate Information</a></li>
                        <li className="py-2"><a href="/">Originals</a></li>
                    </ul>
                    <ul className="col-sm-12 col-md-6 col-lg-3 py-2 list-unstyled">
                        <li className="py-2"><a href="/">Help Center</a></li>
                        <li className="py-2"><a href="/">Jobs</a></li>
                        <li className="py-2"><a href="/">Terms of Use</a></li>
                        <li className="py-2"><a href="/">Contact Us</a></li>
                    </ul>
                    <ul className="col-sm-12 col-md-6 col-lg-3 py-2 list-unstyled">
                        <li className="py-2"><a href="/">Account</a></li>
                        <li className="py-2"><a href="/">Redeem Gift Cards</a></li>
                        <li className="py-2"><a href="/">Privacy</a></li>
                        <li className="py-2"><a href="/">IQ Test</a></li>
                    </ul>
                    <ul className="col-sm-12 col-md-6 col-lg-3 py-2 list-unstyled">
                        <li className="py-2"><a href="/">Media Center</a></li>
                        <li className="py-2"><a href="/">Buy Gifts Cards</a></li>
                        <li className="py-2"><a href="/">Cookies Preferences</a></li>
                        <li className="py-2"><a href="/">Legal Notices</a></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="input-group bg-dark text-white mb-3 w-50">
                            <div className="input-group-prepend  border-right-0">
                                <label className="input-group-text bg-dark text-white" htmlFor="inputGroupSelect01">
                                    <i className="fas fa-globe"></i>
                                </label>
                            </div>
                            <select className="custom-select bg-dark text-white  border-left-0" id="inputGroupSelect01">
                                <option value="English" defaultValue className="">English</option>
                                <option value="Arabic">Arabic</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;