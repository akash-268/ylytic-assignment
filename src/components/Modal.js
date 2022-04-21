import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component';

import './Modal.css'

function Modal(props) {
    const [feedback, setFeedback] = useState('Tell us how we can improve..');

    function showModalHandler(rating){
        console.log(rating)
    }

    function feedbackHandler(event){
        setFeedback(event.target.value)
        console.log(event.target.value)
    }

    function closeModalHandler(){
        props.setShowModal(!props.showModal)
        props.setStars(0)
    }

    function closeModalHandler2() {
      props.setShowModal(!props.showModal);
      props.setStars(0);
    }

  return (
    <div className="modal">
      <div className='modal-card'>
        <ReactStars
          count={5}
          onChange={showModalHandler}
          size={120}
          activeColor="#ffd700"
          value={props.value}
        />
        <h3 style={{textAlign:'center'}}>{`${props.value} out of 5 stars`}</h3>
        <textarea placeholder={feedback} onChange={feedbackHandler} className='text-area'/>
        <div className='buttons'>
          <button onClick={closeModalHandler} className='cancel-button'>Cancel</button>
          <button onClick={closeModalHandler2} className='submit-button'> Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Modal