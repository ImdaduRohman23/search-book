import React, { useState } from 'react';
import Home from './pages/Home/Home';
import './app.css';
import axios from 'axios';
import { Route, Routes} from 'react-router-dom';
import { MainContext } from './context/MainContext';
// import Favorite from './pages/Favorite/Favorite';
// import ModalComp from './components/Modal/ModalComp';

const App = () => {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBiTD8AtRYmnM8QiKCFIJspOqdWIrpVi1Q&maxResults=34`;

    const getDataBooks = () => {
        setLoading(true);
        axios.get(url)
            .then(res => {
                setBooks(res.data.items)
                setLoading(false)
            })
            .catch(err => console.log(err));
        };

    const handleSearch = (e) => {
        e.preventDefault();
        getDataBooks();
        setSearch('');
    };

    return (
        <div className='app'>
            <div className="app-container">
                <MainContext.Provider value={{search, setSearch, books, loading, handleSearch}} >
                    <Routes>
                        <Route path='/' element={<Home /> }/>
                        
                        {/* <Route path='/' element={<Home search={search} setSearch={setSearch} handleSearch={handleSearch} books={books} loading={loading} /> }/> */}
                        {/* <Route path='/fav' element={<Favorite />} />
                        <Route path='cb' element={<ModalComp />} /> */}
                    </Routes>
                </MainContext.Provider>
            </div>
        </div>
    )
}

export default App
