import React from 'react';
import '../card/card.css'
import '../card/responsive.css'
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const CardComponent = ({ heading, paragraph, report}) => (
    <Card style={{
        width: 370,
    }}
        className="main-card"
    >
        <h2 className='card-heading'>{heading}</h2>
        <p className='card-paragraph'>{paragraph}</p>
        <Link className='card-report'>{report}</Link>
    </Card>
);
export default CardComponent;
