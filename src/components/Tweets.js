import React from 'react'
import Form from './Form'
import Posts from './Posts'

const Tweets = () => {
  return (
    <div className='posts'>
        <div className='posts_home'>Home</div>
        <Form/>
        <Posts/>
      
    </div>
  )
}

export default Tweets
