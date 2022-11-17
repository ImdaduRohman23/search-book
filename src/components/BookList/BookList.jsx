import React from 'react';
import './booklist.css';
const BookList = ({books}) => {
    console.log(books)

    return (
        <div className='bookList'>
            <div className="bookList-container">
                {
                    books.map(book => {
                        return (
                            <div className='bookList__card'>
                                <div className="bookList__card-img">
                                    <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail}  alt="" />
                                </div>
                                <div className="bookList__card-title">
                                    <h6>{book.volumeInfo.title}</h6>
                                </div>
                            </div>
                            )
                            {/* <h5>
                                {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail}
                                {book.volumeInfo.title}
                            </h5>
                            <div className="bookList__item">

                            </div>
                        </> */}
                    })
                }
            </div>
        </div>
    )
}

export default BookList
