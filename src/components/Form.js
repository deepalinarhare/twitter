import React from 'react'
import { FaCalendarCheck, FaRegImage, FaRegListAlt, FaRegSmile } from 'react-icons/fa'

const Form = () => {
    return (
        <div className='form'>

            <div className='form_first'>
                <div className='form_img'>
                    <img src="/images/profile.jpg" alt="" />
                </div>
                <div className='input'>
                    <input type="text" className='create' placeholder="What's happening?" />
                </div>
            </div>
            <div className='form_second'>
                <div className='icons'>
                    <FaRegImage className='ic' />'
                    <FaRegListAlt className='ic' />'
                    <FaRegSmile className='ic' />
                    <FaCalendarCheck className='ic' />
                </div>
                <div className='btn'>
                    <a href=" " >Tweet</a>
                </div>
            </div>

        </div>
    )
}

export default Form
