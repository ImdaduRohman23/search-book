import React from 'react';
import './modal.css'

const ModalComp = ({showModal, item, setShowModal}) => {
    if(!showModal){
        return null
    }

    return (
        <div className="modal-outer">
            <div className="modal-container">
                <button className="modal__close" onClick={() => setShowModal(false)} ><i className="fa-regular fa-circle-xmark"></i></button>
                <div className="modal__content">
                    <div className="content__img">
                        <img src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail}  alt="" />
                    </div>
                    <div className="content__info">
                        <h1>{item.volumeInfo.title}</h1>
                        <h3>{item.volumeInfo.authors[0]}</h3>
                        <h4>{item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span></h4>
                        <a href={item.volumeInfo.previewLink} target='blank'><button>More Info</button></a>
                    </div>
                </div>
                <h4>{item.volumeInfo.description}</h4>
            </div>
        </div>
    )
}

export default ModalComp 
