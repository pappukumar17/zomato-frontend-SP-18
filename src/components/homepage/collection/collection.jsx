import React from 'react';
import { AiFillCaretRight } from "react-icons/ai";
import '../collection/collection.css'
import '../collection/responsive.css'

function collection() {
    return (
        <>
            <div className="custom-container">
                <div className="main-collection">
                    <div className="collection-content">
                        <h1 className='collection-heading'>Collections</h1>
                        <p className="collection-paragraph">Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
                    </div>
                    <div className="city-collection">
                        <a href="/" className="heading">All collections in Delhi NCR <AiFillCaretRight /></a>
                    </div>
                </div>
                <div className="collection">
                    <a href="/" className="collection-anchor">
                        <div className="collection-item">
                            <div className="image">
                                <img src={"https://b.zmtcdn.com/data/collections/2c6e67f4208215d6cb5377892d07eb5b_1673940490.jpg?output-format=webp"} alt="" />
                                <div className="bottom-left">17 Best Insta-Worthy Places</div>
                                <div className="bottom-left1">17 Places<AiFillCaretRight /></div>
                            </div>
                        </div>
                    </a>
                    <a href="/" className="collection-anchor">
                        <div className="collection-item">
                            <div className="image">
                                <img src={"https://b.zmtcdn.com/data/collections/a9e8377fce9b702add08c5305100f8ec_1669367619.jpg?output-format=webp"} alt="" />
                                <div className="bottom-left">16 Romantic Dining Places</div>
                                <div className="bottom-left1">16 Places<AiFillCaretRight /></div>
                            </div>
                        </div>
                    </a>
                    <a href="/" className="collection-anchor">
                        <div className="collection-item">
                            <div className="image">
                                <img src={"https://b.zmtcdn.com/data/collections/fa3d91f4308681ae6017e5b59d0eb5b4_1669979469.jpg?output-format=webp"} alt="" />
                                <div className="bottom-left">15 Serene Rooftop Places</div>
                                <div className="bottom-left1">15 Places<AiFillCaretRight /></div>
                            </div>
                        </div>
                    </a>
                    <a href="/" className="collection-anchor">
                        <div className="collection-item">
                            <div className="image">
                                <img src={"https://b.zmtcdn.com/data/collections/bf6c0353606b5b6c44b93deab78d5ac7_1673335912.jpg?output-format=webp"} alt="" />
                                <div className="bottom-left">10 Trending Restaurants</div>
                                <div className="bottom-left1">10 Places<AiFillCaretRight /></div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="mobile-collection">
                    <a href="/" className="mobile-collection-anchor">
                        <div className="mobile-collection-item">
                            <div className="mobile-image">
                                <img src={"https://b.zmtcdn.com/data/collections/2c6e67f4208215d6cb5377892d07eb5b_1673940490.jpg?output-format=webp"} alt="" />
                                <div className="mobile-bottom-left">17 Best Insta-Worthy Places</div>
                                <div className="mobile-bottom-left1">17 Places<AiFillCaretRight /></div>
                            </div>
                        </div>
                    </a>
                    <a href="/" className="mobile-collection-anchor">
                        <div className="mobile-collection-item">
                            <div className="mobile-image">
                                <img src={"https://b.zmtcdn.com/data/collections/a9e8377fce9b702add08c5305100f8ec_1669367619.jpg?output-format=webp"} alt="" />
                                <div className="mobile-bottom-left">16 Romantic Dining Places</div>
                                <div className="mobile-bottom-left1">16 Places<AiFillCaretRight /></div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="mobile-collection">
                    <a href="/" className="mobile-collection-anchor">
                        <div className="mobile-collection-item">
                            <div className="mobile-image">
                                <img src={"https://b.zmtcdn.com/data/collections/fa3d91f4308681ae6017e5b59d0eb5b4_1669979469.jpg?output-format=webp"} alt="" />
                                <div className="mobile-bottom-left">15 Serene Rooftop Places</div>
                                <div className="mobile-bottom-left1">15 Places<AiFillCaretRight /></div>
                            </div>
                        </div>
                    </a>
                    <a href="/" className="mobile-collection-anchor">
                        <div className="mobile-collection-item">
                            <div className="mobile-image">
                                <img src={"https://b.zmtcdn.com/data/collections/bf6c0353606b5b6c44b93deab78d5ac7_1673335912.jpg?output-format=webp"} alt="" />
                                <div className="mobile-bottom-left">10 Trending Restaurants</div>
                                <div className="mobile-bottom-left1">10 Places<AiFillCaretRight /></div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>


    )
}

export default collection

