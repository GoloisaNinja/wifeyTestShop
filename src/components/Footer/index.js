import React from "react";
import { Link } from "gatsby";
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
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>BLOG</li>
              <li>SIZING</li>
              <li>SHIPPING</li>
              <li>
                <Link to="/contact">CONTACT US</Link>
              </li>
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
