import React from 'react'
import '../body/body.css'
import '../body/responsive.css'
import ContactForm from '../form/form'
import CardComponent from '../card/card'

export default function Body() {
    return (
        <div className="custom-container">
            <div className="main-part">
                <div className="contact-left-part">
                    <ContactForm />
                </div>
                <div className="contact-right-part">
                    <CardComponent heading={"Report a Safety Emergency"} paragraph={"We are committed to the safety of everyone using Zomato."} report={"Report here"} />
                    <CardComponent heading={"Issue with your live order?"} paragraph={"Click on the 'Support' or 'Online ordering help' section in your app to connect to our customer support team."} />
                    <CardComponent heading={"Issue with Zomato Pro?"} paragraph={"Click on the 'Pro help' section in your app to connect to our Pro support team."} />
                </div>
            </div>
        </div>
    )
}
