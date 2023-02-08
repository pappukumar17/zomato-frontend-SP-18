import React from 'react'
import { Link } from 'react-router-dom'
import '../navbar/navbar.css'

export default function Navbar() {
    return (
        <>
            <div class="topnav" id="myTopnav">
                <Link href="#home" class="active">Home</Link>
                <Link href="#news">News</Link>
                <Link href="#contact">Contact</Link>
                <Link href="#about">About</Link>
                <Link to="javascript void(0)" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </Link>
            </div>

            <div style={{paddingleft:"16px"}}>
                <h2>Responsive Topnav Example</h2>
                <p>Resize the browser window to see how it works.</p>
            </div>
        </>
    )
}
