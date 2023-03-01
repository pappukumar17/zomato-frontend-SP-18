import React from 'react'
import Footer from '../common/footer/footer'
import Body from './body/body'
import Midsection from './middlesection/midsection'
import '../../index.css'
import Header1 from './header/header'

export default function Contact() {
    return (
        <div>
            <Header1 />
            <Midsection />
            <Body />
            <Footer />
        </div>
    )
}
