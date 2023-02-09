import React from 'react';
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
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
                    <Link href="/" className="collection-anchor">
                        <div className="collection-item">
                            <div className="image">
                                <img src={"https://b.zmtcdn.com/data/collections/d55e29aa6c9b3a004e89d0d156489c40_1675678592.jpg?output-format=webp"} alt="" />
                                <div className="bottom-left">17 Best Insta-Worthy Places</div>
                                <div className="bottom-left1">17 Places<AiFillCaretRight /></div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/" className="collection-anchor">
                        <div className="collection-item">
                            <div className="image">
                            <img src={"https://b.zmtcdn.com/data/collections/c552488ee2d95ff698476869113c5702_1674569243.jpg?output-format=webp"} alt="" />
                                <div className="bottom-left">16 Romantic Dining Places</div>
                                <div className="bottom-left1">16 Places<AiFillCaretRight /></div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/" className="collection-anchor">
                        <div className="collection-item">
                            <div className="image">
                                <img src={"https://b.zmtcdn.com/data/collections/902ab00320f06e611d5118c61f1c6918_1675332681.jpg?output-format=webp"} alt="" />
                                <div className="bottom-left">15 Serene Rooftop Places</div>
                                <div className="bottom-left1">15 Places<AiFillCaretRight /></div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/" className="collection-anchor">
                        <div className="collection-item">
                            <div className="image">
                                <img src={"https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252614.jpg?output-format=webp"} alt="" />
                                <div className="bottom-left">10 Trending Restaurants</div>
                                <div className="bottom-left1">10 Places<AiFillCaretRight /></div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="mobile-collection">
                    <Link href="/" className="mobile-collection-anchor">
                        <div className="mobile-collection-item">
                            <div className="mobile-image">
                                <img src={"https://b.zmtcdn.com/data/collections/d55e29aa6c9b3a004e89d0d156489c40_1675678592.jpg?output-format=webp"} alt="" />
                                <div className="mobile-bottom-left">17 Best Insta-Worthy Places</div>
                                <div className="mobile-bottom-left1">17 Places<AiFillCaretRight /></div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/" className="mobile-collection-anchor">
                        <div className="mobile-collection-item">
                            <div className="mobile-image">
                                <img src={"https://b.zmtcdn.com/data/collections/c552488ee2d95ff698476869113c5702_1674569243.jpg?output-format=webp"} alt="" />
                                <div className="mobile-bottom-left">16 Romantic Dining Places</div>
                                <div className="mobile-bottom-left1">16 Places<AiFillCaretRight /></div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="mobile-collection">
                    <Link href="/" className="mobile-collection-anchor">
                        <div className="mobile-collection-item">
                            <div className="mobile-image">
                                <img src={"https://b.zmtcdn.com/data/collections/902ab00320f06e611d5118c61f1c6918_1675332681.jpg?output-format=webp"} alt="" />
                                <div className="mobile-bottom-left">15 Serene Rooftop Places</div>
                                <div className="mobile-bottom-left1">15 Places<AiFillCaretRight /></div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/" className="mobile-collection-anchor">
                        <div className="mobile-collection-item">
                            <div className="mobile-image">
                                <img src={"https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252614.jpg?output-format=webp"} alt="" />
                                <div className="mobile-bottom-left">10 Trending Restaurants</div>
                                <div className="mobile-bottom-left1">10 Places<AiFillCaretRight /></div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>


    )
}

export default collection

