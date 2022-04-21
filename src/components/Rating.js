import React  from 'react'
import RatingStars from './RatingStars'
import './Rating.css'
function Rating() {

  return (
    <React.Fragment>
      <h3 className='rate'>Rate your Experience *</h3>
      <RatingStars />
      <p className='para'>
          <span style={{fontSize:'smaller'}}>Not Satisfied</span>
          <span style={{fontSize:'smaller'}}>Very Satisfied</span>
      </p>
    </React.Fragment>
  );
}

export default Rating