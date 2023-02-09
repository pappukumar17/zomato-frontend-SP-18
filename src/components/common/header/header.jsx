import React from 'react'
import './header.css'
import './responsive.css'
import '../../../index.css'
import { NavLink } from 'react-router-dom'
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

export default function Header() {
    return (
        <div className='header-bg'>
            <div className="custom-container">
                <header className='homepage-header-1'>
                    <ul className="app-logo-section">
                        <li>
                            <NavLink className={"app-logo-name"}><MdOutlineAppSettingsAlt /> Get the app</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-elements">
                        <li>
                            <NavLink className={"navbar-element"}>Add restaurant</NavLink>
                        </li>
                        <li>
                            <NavLink className={"navbar-element"} data-bs-toggle="modal" data-bs-target="#login">Log in</NavLink>
                        </li>
                        <li>
                            <NavLink className={"navbar-element"} data-bs-toggle="modal" data-bs-target="#signup">Sign up</NavLink>
                        </li>

                    </ul>
                </header>
            </div>
            <div className="custom-container">
                <div className="top-section">
                    <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="zomato-logo" className="zomato-image" />
                    <p className="zomato-image-text">Discover the best food & drinks in Delhi NCR</p>
                    <div className="search">
                        <div className="search-item-1">
                            <HiLocationMarker size={30} color="rgb(255, 126, 139)" />
                            <p className="search-para">
                                <select name="membership" id="membership" className='search-option'>
                                    <option value="silver" selected>Spark Eighteen, New Delhi</option>
                                </select></p>
                        </div>
                        <div className="search-item-2">
                            <BsSearch size={20} className="location-marker" />
                            <input type="text" placeholder="Search for restaurant, cuisine or a dish" className='search-para-2' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
