import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";
import Modal from "./Modal";

function RatingStars() {
  const [ showModal, setShowModal ] = useState(false);
  const [ stars, setStars ] = useState(0);
  function showModalHandler(rating) {
    setShowModal(true);
    setStars(rating);
  }

  return (
    <React.Fragment>
      {showModal && <Modal value={stars} setShowModal={setShowModal} setStars={setStars} stars={stars} showModal={showModal} />}
      <ReactStars
        count={5}
        onChange={showModalHandler}
        size={80}
        activeColor="#ffd700"
        value={stars}
      />
    </React.Fragment>
  );
}

export default RatingStars;
