import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import {Route, Routes } from 'react-router-dom';

const App = () => {
    const [title, setTitle] = useState([]);
    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get('http://openlibrary.org/search.json?title=the+lord+of+the+rings')
            .then(res => res.data.docs.slice(0, 20).map(item => {
                setTitle(state => {
                    state = [...state, {
                        id: item.key,
                        title: item.title,
                        cover_id: item.cover_i,
                        author_name: item.author_name,
                    }]
                    return state
                })
            }))
    }


    console.log(title)
    return (
        <div>
            {/* <Routes>
                <Route path='/' element={<Home />}>
                <Route path='about' element={<About /> } />
                <Route path='book' element={<BookList /> } />
                <Route path='book/:id' element={<BookDetail /> } />
                </Route>
            </Routes> */}
            <h1>App</h1>
            {
                title.slice(0,5).map(item => {
                    return <p>{item.author_name[0]}</p>
                } )
            }
        </div>
    )
}

export default App
