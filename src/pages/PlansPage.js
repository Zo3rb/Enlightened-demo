import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Plan from '../components/Plan';
import '../css/Plans.css';


class PlansPage extends Component {

    state = {
        free: {
            title: 'Free Plan',
            price: 'Freebie',
            modules: '2/15',
            access: '30 Days',
            video: 'Low Quality',
            download: 'Not Downloadable',
            faq: 'No Access'
        },
        standard: {
            title: 'Standard Plan',
            price: '$15',
            modules: '5/15',
            access: 'Infinite',
            video: 'Medium Quality',
            download: 'Downloadable',
            faq: 'Available Material'
        },
        premium: {
            title: 'Premium Plan',
            price: '$50',
            modules: '15/15',
            access: 'Infinite',
            video: 'High Definition',
            download: 'Downloadable',
            faq: '24/7'
        }
    }

    render() {
        return (
            <div className="container-fluid Plans">
                <div className="row p-5">
                    <div className="col-sm-8 offset-sm-2 offset-md-0 col-md-4 py-5 px-3 Plan ">
                        <Plan plan={this.state.free} />
                    </div>
                    <div className="col-sm-8 offset-sm-2 offset-md-0 col-md-4 py-5 px-3 Plan ">
                        <Plan plan={this.state.standard} />
                    </div>
                    <div className="col-sm-8 offset-sm-2 offset-md-0 col-md-4 py-5 px-3 Plan ">
                        <Plan plan={this.state.premium} />
                    </div>
                    <div className="col">
                        <button className="btn btn-danger btn-block mt-3">
                            <Link to="/reg" className="text-white text-decoration-none">Choose Your Plan</Link>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlansPage;