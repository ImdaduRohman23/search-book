import React from 'react';
import './booklist.css';

const BookList = ({books}) => {
    console.log(books)

    return (
        <div>
            <h2>Book List</h2>
            {
                books.map(book => {
                    return <>
                        <h5>
                            {/* {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail} */}
                            {book.volumeInfo.title}
                        </h5>
                    </>
                })
            }
        </div>
    )
}

export default BookList
