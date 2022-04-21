import React from 'react'
import {AiOutlineLineChart} from 'react-icons/ai'
import './Aov.css'
function Aov() {
  return (
    <div className="aov-main">
      <header className="aov" style={{ fontSize: "large" }}>
        <AiOutlineLineChart /> AOV*
      </header>
      <div className="aov-content-overview">
        <div className="aov-content">
          <h1 className="aov-price">$18</h1>
          <span className="aov-discount">
            &uarr;<span style={{ fontSize: "x-small" }}> 60%</span>
          </span>
          <br />
          <span className="caption">vs Previous day</span>
        </div>
      </div>
    </div>
  );
}

export default Aov