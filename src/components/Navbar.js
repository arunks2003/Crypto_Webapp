import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <div className='header'>
            <div className="container">
                <h1>De<span className='primary'>Fi</span></h1>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}> {/*for the working of the hamburger icon we use so*/}
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Featured</a>
                    </li>
                    <li>
                        <a href="/">Earn</a>
                    </li>
                    <li>
                        <a href="/">Contanct</a>
                    </li>
                </ul>
                <div className="btn-group">
                    <button className="btn">Connect Wallet</button>
                </div>
                <div className="hamburger" onClick={handleClick}>
                    {clicked ? (<FaTimes size={20} style={{ color: "#333" }} />) : (<FaBars size={20} style={{ color: "#333" }}></FaBars>)}

                </div>
            </div>

        </div>
    )
}

export default Navbar
