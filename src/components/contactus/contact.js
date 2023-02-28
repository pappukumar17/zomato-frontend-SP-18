import React from 'react'
import Footer from '../common/footer/footer'
import Body from './body/body'
import SignUpModal from './header/signup/signupModal'
import LoginModal from './header/login/loginModal'
import Midsection from './middlesection/midsection'
import '../../index.css'
import Header1 from './header/header'
import LoginModal1 from './header/modal/loginModal'


export default function Contact() {
    return (
        <div>
            <Header1/>
            <SignUpModal />
            <LoginModal />
            <SignUpModal />
            <LoginModal />
            <LoginModal1/>
            <Midsection />
            <Body />
            <Footer />
        </div>
    )
}
