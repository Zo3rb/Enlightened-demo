import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import TabComponent from '../components/TabComponent';
import Footer from '../components/Footer';

const WelcomePage = () => {
    return (
        <Fragment>
            <Navbar />
            <Header />
            <div className="d-none d-md-block">
                <TabComponent />
            </div>
            <Footer />
        </Fragment>
    );
}

export default WelcomePage;
