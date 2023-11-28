import React from "react";
import { Layout, ContactHeaderSection, ContactForm } from "../components";

const Contact = () => {
  const padding = "20px";
  return (
    <Layout padding={padding}>
      <ContactHeaderSection />
      <ContactForm />
    </Layout>
  );
};
export default Contact;
