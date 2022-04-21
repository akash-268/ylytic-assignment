import React from 'react'
import "./Homepage.css";

import Header from './Header';
import Intro from './Intro';
import Sales from './Sales';
import Stats from './Stats';
import Rating from'./Rating';
import Footer from './Footer';

function Homepage() {
  return (
    <div className="home">
      <div className='data'>
          <Header/>
          <Intro/>
          <Sales/>
          <Stats/>
          <p className='average-order-value'>*Average Order Value</p>
      </div>
      <div>
        <Rating/>
      </div>
      <Footer/>
    </div>
  );
}

export default Homepage