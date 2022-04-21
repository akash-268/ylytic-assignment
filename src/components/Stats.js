import React from 'react'
import Aov from './Aov'
import Orders from './Orders'
import './Stats.css'

function Stats() {
  return (
    <div className='stats'>
        <Orders/>
        <Aov/>
    </div>
  )
}

export default Stats