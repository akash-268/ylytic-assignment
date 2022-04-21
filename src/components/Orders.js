import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import './Orders.css'
function Orders() {
  return (
    <div className="orders-main">
      <header className="orders" style={{ fontSize: "large" }}>
        <AiOutlineShopping /> ORDERS
      </header>
      <div className="orders-content-overview">
        <div className="orders-content">
          <h1 className="orders-price">10</h1>
          <span className="order-discount">
            &darr;<span style={{ fontSize: "x-small" }}> 20%</span>
          </span>
          <br />
          <span className="caption">vs Previous day</span>
        </div>
      </div>
    </div>
  );
}

export default Orders