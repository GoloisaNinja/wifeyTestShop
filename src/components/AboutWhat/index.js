import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { GradientH2 } from "../GradientText";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { AboutWhatWrapper, AboutWhatText } from "./styles";

export function AboutWhat() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "whatWeDo.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return (
    <AboutWhatWrapper data-name="What we do">
      <div>
        <GradientH2
          font={`"Abril Fatface", cursive`}
          color={`#035efc, #a8327f`}
        >
          <FaQuoteLeft /> Shopping should be fun! The pieces should be pretty,
          show up fast, and shouldn't break the bank. <FaQuoteRight />{" "}
          <span>- Neon Unicorn CEO</span>
        </GradientH2>
      </div>
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt="illustration of a team collaborating on work things"
      />

      <AboutWhatText>
        <p>
          At Neon Unicorn, we work hard to bring you a singularly unique and
          satisfying shopping experience. Our in house style expert spends
          countless hours curating beautiful collections and stunning individual
          pieces, so finding your next look is just a click away. We also pride
          ourselves on creating a healthy and sustainable community. We care
          about our customers, and whether we are posting to our social media
          accounts, or writing new and exciting articles in our style blog, it's
          all for our wonderful commmunity of pretty unicorns! At Neon Unicorn
          we've adopted a business model that allows us to minimize some of the
          overhead that would otherwise result in higher costs to our customers,
          in turn, giving us more time to focus on customer experience. We
          continually roll out new features and we also rely on customer
          feedback and suggestions to help us improve. The bottom line is that
          you, the customer, are the number one priority. Our mission is to help
          you find your next outfit at an amazing price, incredibly fast, and
          among a healthy community of fun and unique style advocates. Be sure
          to keep scrolling to find our social accounts and style blog! Be
          Unique. Shop Unique. Become a Neon Unicorn!
        </p>
      </AboutWhatText>
    </AboutWhatWrapper>
  );
}
