import React, { useState } from 'react';
import './search.css';

const Search = () => {
    const [search, setSearch] = useState('');
    
    const handleSearch = (e) => {
        e.preventDefault();
        console.log(search)
    }

    return (
        <div className='search' >
            <form onSubmit={handleSearch} classNam='search__form' >
                <input className='search__form-input' onChange={e => setSearch(e.target.value)} value={search} type="text" placeholder='The lost world . . .'/>
                <button className='search__form-button' type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    )
}

export default Search
