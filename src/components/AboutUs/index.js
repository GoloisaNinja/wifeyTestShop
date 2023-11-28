import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { GradientH2 } from "../GradientText";
import { AboutUsWrapper, AboutUsText } from "./styles";

export function AboutUs() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "beautyandnerd.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return (
    <AboutUsWrapper id="scrollTargetAdd" data-name="Our Story">
      <div>
        <GradientH2
          $font={`"Abril Fatface", cursive`}
          color={`#c800cf, #297999`}
        >
          Beauty and the Nerd
        </GradientH2>
      </div>
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt="illustration of man lifting up woman with floating love hearts in the air"
      />

      <AboutUsText>
        <p>
          So what about us? What's our story? How did Neon Unicorn even come to
          be? Well settle in my pretties, for I have a tale to tell.
          <br />
          <br />
          Once there was a gorgeous, beautiful, intelligent, adorable,
          resplendent Beauty, that was also quite witty. It was known far and
          wide that she was stunningly pretty. She was the most gorgeous beauty
          in all the land. She was also a style expert that picked out glorious
          women's clothing collections by hand. She dreamt of all things pretty,
          and of opening her own shop. But the wicked Queen NineToFive Jobby Job
          only laughed and told her to stop. The Beauty was angry, this was no
          fanciful whim. The Beauty roared at the stars, and that's when she saw
          him. He was but a peasant and was not at all pretty. But he a had cute
          dog instead of a kitty. She exclaimed very loudly, desperate to be
          heard. PARDON ME THERE GOOD PEASANT! BY CHANCE, WOULD IT HAPPEN, BE
          YOU A NERD? The peasant was shocked, and quite nervous. How would this
          bode? Reluctantly he shrugged, and said "Well, I guess I can code" The
          Beauty cried out with great joy while wicked Queen Jobby Job fell with
          a flop. The Beauty scooped up the pretty dog and screamed BUILD ME A
          SHOP! They both fell in love, the shop built without so much as a log.
          The nerd in love with the Beauty, and the Beauty in love with the dog.
        </p>
      </AboutUsText>
    </AboutUsWrapper>
  );
}
