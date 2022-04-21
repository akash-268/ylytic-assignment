import React from 'react'
import Card from './UI/Card'
import ProgressRing from './ProgressRing'
import { BiMoney } from 'react-icons/bi'
import './Sales.css'
function Sales() {
  return (
    <Card className="sales-main">
      <header className="sales" style={{ fontSize: "large" }}>
        <BiMoney /> SALES
      </header>
      <div className="sales-content-overview">
        <div className="sales-content">
          <h1 className="sales-price">$180</h1>
          <span className="discount">
            &uarr;<span style={{ fontSize: "x-small" }}>10%</span>
          </span>
          <br />
          <span className="caption">vs Previous day</span>
        </div>
        <div className="progress-ring">
          <ProgressRing />
          <p className="progress-ring-text">Achieved</p>
          <p className="weekly-target">
            Weekly Target{" "}
            <span style={{ color: "#b872ff", fontWeight: "bold" }}>$2400</span>
          </p>
        </div>
      </div>
    </Card>
  );
}

export default Sales