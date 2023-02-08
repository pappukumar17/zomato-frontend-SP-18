import React from 'react'
import Header from '../contactus/header/header'
import Footer from '../common/footer/footer'
import Body from './body/body'
import SignUpModal from './header/signup/signupModal'
import LoginModal from './header/login/loginModal'
import Midsection from './middlesection/midsection'


export default function Contact() {
    return (
        <div>
            <Header />
            <SignUpModal />
            <LoginModal />
            <Midsection />
            <Body />
            <Footer />
        </div>
    )
}
