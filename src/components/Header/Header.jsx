import React from 'react';
import Search from '../Search/Search';
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header__content">
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex reiciendis sunt hic, nisi harum, quasi voluptatem officia dicta est eos magnam quo veritatis ad vitae accusantium laboriosam ducimus eveniet.</p> */}
                <h3>Find Your Book</h3>
                <Search />
            </div>
        </div>
    )
}

export default Header