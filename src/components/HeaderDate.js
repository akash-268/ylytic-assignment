import React from 'react'
import './HeaderDate.css'
function HeaderDate() {
    const month = 'JUL'
    const day = 17
  return (
    <div className="header-date">
      <div className="header-date__month">{month}</div>
      <div className="header-date__day">{day}</div>
    </div>
  );
}

export default HeaderDate