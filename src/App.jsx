import React, { useState, useEffect } from 'react';
import Home from './pages/Home/Home';
import './app.css';
import axios from 'axios';

const App = () => {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBiTD8AtRYmnM8QiKCFIJspOqdWIrpVi1Q`

    const getDataBooks = () => {
        axios.get(url)
            .then(res => setBooks(res.data.items))
            .catch(err => console.log(err))
    }

    const handleSearch = (e) => {
        e.preventDefault();
        getDataBooks();
        setSearch('');
    }

    return (
        <div className='app'>
            <div className="app-container">
                <Home search={search} setSearch={setSearch} handleSearch={handleSearch} books={books}/>
            </div>
        </div>
    )
}

export default App
