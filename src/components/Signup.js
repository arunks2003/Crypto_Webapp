import React from 'react'
import Crypto from '../assets/trade.png'
import './Signup.css'

const Signup = () => {
    return (
        <div className='signup'>
            <div className="container">
                <div className="left">
                    <img src={Crypto} alt="/" />
                </div>


                <div className="right">
                    <h2>Earn Passive income with crypto.</h2>
                    <p>Earn upto 12% annual reward on 30+ digital assets.</p>
                    <div className='input-container'>
                        <input type="email" placeholder='Enter your mail' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
