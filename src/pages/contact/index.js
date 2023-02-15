import React from 'react'
import { Contact, ContactContainer, ContactH, ContactP, ContactBtn } from './contactElements'

const ContactPage = ({data}) => {
  return (
    <Contact>
        <ContactContainer>
            <ContactH>Contact</ContactH>
            {data.contact&&data.contact.map(({id, paragraph}) =>{
              return(
                <ContactP key={id}>{paragraph}</ContactP>
              );
            })}
            <ContactBtn href="mailto: e.loutos8@gmail.com" target="_blank" rel="noopener noreferrer">Get In Touch</ContactBtn>
        </ContactContainer>
    </Contact>
  )
}

export default ContactPage