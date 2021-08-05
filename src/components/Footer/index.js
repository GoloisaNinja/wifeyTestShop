import React from "react";
import { FooterLogo } from "../FooterLogo";
import { BlueUnicornLogo } from "../BlueUnicornLogo";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaCopyright,
} from "react-icons/fa";
import {
  FooterWrapper,
  FooterGrid,
  FooterInfoWrapper,
  FooterSocialWrapper,
} from "./styles";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <FooterGrid>
        <FooterInfoWrapper>
          <div>
            <ul>
              <li>ABOUT</li>
              <li>PARTNERS</li>
              <li>SIZING</li>
              <li>SHIPPING</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </FooterInfoWrapper>
        <BlueUnicornLogo />
        <FooterSocialWrapper>
          <div>
            <p>Follow Us!</p>
            <div>
              <FaTwitter />
              <FaFacebookF />
              <FaInstagram />
            </div>
          </div>
        </FooterSocialWrapper>
      </FooterGrid>
      <div>
        <FooterLogo />
        <FaCopyright />
        <p>{currentYear}</p>
      </div>
    </FooterWrapper>
  );
}
