import React, { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import './search.css';

const Search = () => {
    const {search, handleSearch, setSearch} = useContext(MainContext);
    return (
        <div className='search' >
            <form onSubmit={handleSearch} className='search__form' >
                <input className='search__form-input' onChange={e => setSearch(e.target.value)} value={search} type="text" placeholder='The lost world . . .'/>
                <button className='search__form-button' type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    )
}

export default Search
