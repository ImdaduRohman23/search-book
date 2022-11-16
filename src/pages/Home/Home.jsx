import React from 'react';
import { Outlet } from 'react-router-dom';
import BookList from '../../components/BookList/BookList';
import Header from '../../components/Header/Header';
import NavbarComp from '../../components/NavbarComp/NavbarComp';

const Home = ({search, setSearch, handleSearch, books}) => {

    return (
        <div className="home">
            <NavbarComp />
            <Header search={search} setSearch={setSearch} handleSearch={handleSearch} />
            <BookList books={books}/>
        </div>
    )
}

export default Home
