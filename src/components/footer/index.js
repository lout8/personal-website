import React from 'react'
import {FooterMain, FooterContainer,FooterCopyright, FooterMenu, FooterItem, FooterLinks } from './footerElements'
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
      <FooterMain>
          <FooterContainer>
              <FooterCopyright to="/"><AiOutlineCopyrightCircle style={{margin:" 0 5px 0 0"}}/>2023 Elissaios Loutos</FooterCopyright>
              <FooterMenu>
                  <FooterItem><FooterLinks to="/about">about</FooterLinks></FooterItem>
                  <FooterItem><FooterLinks to="/projects">projects</FooterLinks></FooterItem>
                  <FooterItem><FooterLinks to="/contact">contact</FooterLinks></FooterItem>
              </FooterMenu>
          </FooterContainer>
      </FooterMain>
  )
}

export default Footer