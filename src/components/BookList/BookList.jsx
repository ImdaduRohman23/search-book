import React from 'react';
import './booklist.css';
import ReactLoading from 'react-loading';

const BookList = ({books, loading}) => {
    console.log(books)

    return (
        <div className='bookList'>
            {
                books.length ? <h3>Your search result . . .</h3> : <h3>Let's find your book . . .</h3>
            }

            {
                loading && <ReactLoading type='spin' color='red' height={667} width={375} />
            }

            {
                books.length ?
                <div className="bookList-container">
                {
                    books.map(book => {
                        return (
                            <div className='bookList__card' key={book.id}>
                                <div className="bookList__card-img">
                                    <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail}  alt="" />
                                </div>
                                <div className="bookList__card-title">
                                    <h6>{book.volumeInfo.title}</h6>
                                    {/* <p>{book.volumeInfo.authors[0]}</p> */}
                                    {/* <p>{book.volumeInfo.publishedDate}</p> */}
                                </div>
                            </div>
                            )
                    })
                }
            </div> : <></>
            }
        </div>
    )
}

export default BookList
