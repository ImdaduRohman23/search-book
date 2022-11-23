import React from 'react';
import Search from '../Search/Search';
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header__content">
                <h3>Find Your Book</h3>
                <Search/>
            </div>
        </div>
    )
}

export default Header
