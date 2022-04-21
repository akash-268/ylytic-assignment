import React from 'react'
import { AiOutlineBulb } from 'react-icons/ai';
import Card from './UI/Card';
import './Intro.css'
function Intro() {
  return (
    <Card className='ylytic-tip'>
        <h4 style={{fontSize:'large',marginBottom:"3%",marginTop:"2%"}}>
          <AiOutlineBulb /> Your Ylytic tip:
        </h4>
        <p style={{fontSize :'small'}}>
          Offer "fast and free" delivery to incentivize shoppers to buy at a
          higher rate and add more to their carts.
        </p>
    </Card>
  );
}

export default Intro