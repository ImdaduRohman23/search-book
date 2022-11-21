import React, { useState } from 'react';
import './booklist.css';
import ReactLoading from 'react-loading';
import ModalComp from '../Modal/ModalComp';

const BookList = ({books, loading}) => {
    // console.log(books)

    const [showModal, setShowModal] = useState(false);
    const [item, setItem] = useState([]);

    return (
        <div className='bookList' id='bookList'>
            {
                books.length ? <h3>Your search result . . .</h3> : <h3>Let's find your book . . .</h3>
            }

            {
                loading && <ReactLoading type='spin' color='orange' height={100} width={100} />
            }

            {
                books.length ?
                <div className="bookList-container">
                {
                    books.map(book => {
                        return (
                            <>
                                <div className='bookList__card' key={book.id} onClick={() => {setShowModal(true); setItem(book)}}>
                                    <div className="bookList__card-img">
                                        <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail}  alt="" />
                                    </div>
                                    <div className="bookList__card-title">
                                        <h6>{book.volumeInfo.title}</h6>
                                        {/* <p>{book.volumeInfo.authors[0]}</p>
                                        <p>{book.volumeInfo.publishedDate}</p> */}
                                    </div>
                                </div>
                                <ModalComp showModal={showModal} item={item} setShowModal={setShowModal}/>
                            </>
                            )
                    })
                }
            </div> : <></>
            }
        </div>
    )
}

export default BookList
