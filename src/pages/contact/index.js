import React from 'react'
import { Contact, ContactContainer, ContactH, ContactP, ContactBtn } from './contactElements'

const ContactPage = () => {
  return (
    <Contact>
        <ContactContainer>
            <ContactH>Contact</ContactH>
            <ContactP>I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</ContactP>
            <ContactBtn href="mailto: e.loutos8@gmail.com" target="_blank" rel="noopener noreferrer">Get In Touch</ContactBtn>
        </ContactContainer>
    </Contact>
  )
}

export default ContactPage