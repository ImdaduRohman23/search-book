import React from 'react';
import BookList from '../../components/BookList/BookList';
import Header from '../../components/Header/Header';
import NavbarComp from '../../components/NavbarComp/NavbarComp';

const Home = ({search, setSearch, handleSearch, books, loading}) => {

    return (
        <div className="home">
            <NavbarComp />
            <Header search={search} setSearch={setSearch} handleSearch={handleSearch} />
            <BookList books={books} loading={loading}/>
        </div>
    )
}

export default Home
