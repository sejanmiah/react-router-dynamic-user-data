import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Sideber from '../Sideber/Sideber';

const Root = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <div className='flex'>
                    <Sideber></Sideber>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;