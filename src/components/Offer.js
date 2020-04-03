import React from 'react';
import { Link } from 'react-router-dom';

const Offer = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3 className="text-center mt-5">
                        Subscribe Now and Get Full Access or
                            <button className="btn btn-danger ml-3">
                            <Link to="/demo" className="text-white text-decoration-none">
                                Free Trial
                                    </Link>
                        </button>
                    </h3>
                    <table className="table table-dark w-100 table-striped my-0">
                        <thead>
                            <tr>
                                <th scope="col" colSpan="3" className="w-50"></th>
                                <th scope="col">Free</th>
                                <th scope="col">Standard</th>
                                <th scope="col">Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" colSpan="3" className="w-50">Price</th>
                                <td><i className="fas fa-dollar-sign"></i> 0</td>
                                <td><i className="fas fa-dollar-sign"></i> 15</td>
                                <td><i className="fas fa-dollar-sign"></i> 50</td>
                            </tr>
                            <tr>
                                <th scope="row" colSpan="3" className="w-50">Modules</th>
                                <td>Limit</td>
                                <td>5/14</td>
                                <td>Full Material</td>
                            </tr>
                            <tr>
                                <th scope="row" colSpan="3" className="w-50">Access</th>
                                <td>30 Days</td>
                                <td>Infinite</td>
                                <td>Infinite</td>
                            </tr>
                            <tr>
                                <th scope="row" colSpan="3" className="w-50">Video Quality</th>
                                <td>Low</td>
                                <td>Medium</td>
                                <td>HD</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Offer;
