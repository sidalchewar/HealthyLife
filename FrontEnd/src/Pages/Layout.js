import React from 'react';
import Footer from './Footer';
import Header from './Header';
import {Outlet} from 'react-router-dom'

function HomePage(props) {
    return (
        <div>
            <Header />
            <Outlet></Outlet>
            <Footer/>     
        </div>
    );
}

export default HomePage;