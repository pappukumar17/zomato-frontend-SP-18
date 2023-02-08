import React from 'react';
import { HiLocationMarker } from "react-icons/hi";
// import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import './header.css'
import './responsive.css'


const Header1 = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <>
            <header className='main-header'>
                <div className="custom-container">
                    <div className="main-navbar">
                    <div className="contact-menu-icon" onClick={handleShowNavbar}>
                        <FaBars color="black" size={20} className='contact-menu-icon-bs' />
                    </div>
                        <ul className='contact-app-heading'>
                            <NavLink>
                                <img className='contact-navlink-image-1' src={"https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"} alt="hello" />
                            </NavLink>
                        </ul>
                        <ul className="contact-search">
                            <div className="contact-search-item-1">
                                <HiLocationMarker size={25} color="rgb(255, 126, 139)" />
                                <p className="contact-search-para">
                                    <select name="membership" id="membership" className='contact-search-option'>
                                        <option value="silver" selected>Spark Eighteen, New Delhi</option>
                                    </select></p>
                            </div>
                            <div className="contact-search-item-2">
                                <BsSearch size={20} className="location-marker" />
                                <input type="text" placeholder="Search for restaurant, cuisine or a dish" className='contact-search-para-2' />
                            </div>
                        </ul>
                        <ul className={`contact-nav-elements  ${showNavbar && 'Active'}`}>
                            <li className='contact-li-1'>
                                <NavLink>
                                    <div className="contact-menu-icon" onClick={handleShowNavbar}>
                                        <AiOutlineClose color="black" size={22} className='menu-icon-bs' />
                                    </div>
                                </NavLink>
                            </li>
                            <li className='contact-li-2'>
                                <NavLink>
                                    <img className='contact-navlink-image-2' src={"https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"} alt="hello" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink data-bs-toggle="modal" data-bs-target="#login">Log in</NavLink>
                            </li>
                            <li>
                                <NavLink data-bs-toggle="modal" data-bs-target="#signup">Sign up</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>

    );
}
export default Header1;


