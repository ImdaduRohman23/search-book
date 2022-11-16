import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import NavbarComp from '../../components/NavbarComp/NavbarComp';

const Home = () => {
    return (
        <div className="home">
            <NavbarComp />
            <Header />
        </div>
    )
}

export default Home
