import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'

const Posts = () => {
  return (
    <div className='post'>
        <div className='post_first'>
            <div className='post_first_img'>
                <img src="https://i.pinimg.com/originals/93/d7/0c/93d70cffd21b11f845f3cf82bd44d0a1.jpg" alt="" />
            </div>
            <div className='post_first_name'><strong>Deepali</strong><FaRegCheckCircle className='verify'/>
            </div>
            <div className='post_username'>@DeepaliNarhare <span>6m</span></div>
        </div>
      <div className='post_details'>
        <div className='post_details_msg'>
        We are so confident that you will get more and better leads using MobileMonkey Messaging Services that we guarantee it or your money back.
        </div>
        <div className='post_details_img'>
            <img src="https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813__340.jpg" alt="" />
        </div>


        <div className='post_first_img'>
                <img src="https://i.pinimg.com/originals/93/d7/0c/93d70cffd21b11f845f3cf82bd44d0a1.jpg" alt="" />
            </div>
            <div className='post_first_name'><strong>Deepali</strong><FaRegCheckCircle className='verify'/>
            </div>
            <div className='post_username'>@DeepaliNarhare <span>6m</span></div>
        </div>
      <div className='post_details'>
        <div className='post_details_msg'>
        We are so confident that you will get more and better leads using MobileMonkey Messaging Services that we guarantee it or your money back.
        </div>
        <div className='post_details_img'>
            <img src="https://images.hindustantimes.com/img/2021/10/13/1600x900/india-new-jersey_1634114268092_1634114275156.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Posts
