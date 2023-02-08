import React from 'react'
import { Link } from 'react-router-dom'
import '../category/category.css'
import '../category/responsive.css'

function category() {
    return (
        <>
            <div className="custom-container">
                <div className="category">
                    <Link href="/" className="anchor">
                        <div className="order">
                            <div className="image">
                                <img src={"https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"} alt="" />
                            </div>
                            <div className="content">
                                <h2 className='heading-category'>Order Online</h2>
                                <p className="description">Stay home and order to your doorstep</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/" className="anchor">
                        <div className="dining">
                            <div className="image">
                                <img src={"https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"} alt="" />
                            </div>
                            <div className="content">
                                <h2 className='heading-category'>Dining</h2>
                                <p className="description">View the city's favourite dining venues</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/" className="anchor">
                        <div className="nightlife">
                            <div className="image">
                                <img src={"https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"} alt="" />
                            </div>
                            <div className="content">
                                <h2 className='heading-category'>Nightlife and Clubs</h2>
                                <p className="description">Explore the city's top nightlife outlets</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>

    )
}

export default category
