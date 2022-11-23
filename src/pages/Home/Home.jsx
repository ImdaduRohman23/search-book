import React from 'react';
import BookList from '../../components/BookList/BookList';
import Header from '../../components/Header/Header';
import NavbarComp from '../../components/NavbarComp/NavbarComp';

const Home = () => {

    return (
        <div className="home">
            <NavbarComp />
            <Header />
            <BookList />
        </div>
    )
}

export default Home
