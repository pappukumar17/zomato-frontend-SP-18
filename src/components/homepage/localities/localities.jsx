import React from 'react';
import '../localities/localities.css'
import '../localities/responsive.css'
import { AiFillCaretRight } from "react-icons/ai";

function localities() {
    return (
        <>
                <div className="main-localities">
                    <h1 className="main-heading">Popular localities in and around Delhi NCR</h1>
                    <div className="localities">
                        <a href="/" className="localities-anchor"><div className="areas">
                            <h2 className="areas-heading">Connaught Place</h2>
                            <p className="areas-name">238 Places</p>
                        </div></a>
                        <a href="/" className="localities-anchor"><div className="areas">
                            <h2 className="areas-heading">Sector 29</h2>
                            <p className="areas-name">133 Places</p>
                        </div></a>
                        <a href="/" className="localities-anchor"><div className="areas">
                            <h2 className="areas-heading">Sector 18, Noida</h2>
                            <p className="areas-name">196 Places</p>
                        </div></a>
                    </div>
                    <div className="localities">
                        <a href="/" className="localities-anchor"><div className="areas">
                            <h2 className="areas-heading">Rajouri Garden</h2>
                            <p className="areas-name">269 Places</p>
                        </div></a>
                        <a href="/" className="localities-anchor"><div className="areas">
                            <h2 className="areas-heading">Saket</h2>
                            <p className="areas-name">302 Places</p>
                        </div></a>
                        <a href="/" className="localities-anchor"><div className="areas">
                            <h2 className="areas-heading">DLF Cyber City</h2>
                            <p className="areas-name">146 Places</p>
                        </div></a>
                    </div>
                    <div className="localities">
                        <a href="/" className="localities-anchor"><div className="areas">
                            <h2 className="areas-heading">Golf Course Road</h2>
                            <p className="areas-name">157 Places</p>
                        </div></a>
                        <a href="/" className="localities-anchor"><div className="areas">
                            <h2 className="areas-heading">DLF Phase 4</h2>
                            <p className="areas-name">210 Places</p>
                        </div></a>
                        <a href="/" className="localities-anchor"><div className="areas">
                            <h2 className="areas-heading-last">See More <AiFillCaretRight /></h2>
                        </div></a>
                    </div>
                </div>
        </>


    )
}

export default localities

