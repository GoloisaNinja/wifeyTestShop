import React from "react";
import { GradientH1, GradientP } from "../GradientText";
import { ContactNoteWrapper } from "./styles";

export function ContactHeaderSection() {
  return (
    <section>
      <GradientH1 font={`'Abril Fatface', cursive`} color={`#ff00f7, #035efc`}>
        Contact The Unicorns!
      </GradientH1>
      <ContactNoteWrapper>
        <GradientP font={`'Lato', sans-serif`} color={`#035efc, #ff00f7`}>
          Need to get in touch? Or maybe you just want to tell us how awesome we
          are? Use the contact form below to drop us a line! We'd love to hear
          your feedback, and if there's something wrong, know that we'll address
          your issue as soon as is Unicornly possible. Please double check your
          email before you hit submit in case we need to email you back! Please
          remember that we are a small team, and allow up to 48 hours for a
          response. Thank you!
        </GradientP>
      </ContactNoteWrapper>
    </section>
  );
}
