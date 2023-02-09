import React from 'react'
import Footer from '../common/footer/footer'
import Body from './body/body'
import SignUpModal from './header/signup/signupModal'
import LoginModal from './header/login/loginModal'
import Midsection from './middlesection/midsection'
import '../../index.css'


export default function Contact() {
    return (
        <div>
            <SignUpModal />
            <LoginModal />
            <SignUpModal />
            <LoginModal />
            <Midsection />
            <Body />
            <Footer />
        </div>
    )
}
