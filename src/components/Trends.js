import React from 'react'
import Keyword from './Keyword'

const Trends = () => {
  return (
    <div className='trends'>
        <div className='search'>
            <input type="text" className='trend_control' placeholder="Search Twitter" />
        </div>
        <Keyword/>
      
    </div>
  )
}

export default Trends
