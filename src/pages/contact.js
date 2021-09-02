import React from "react";
import { Layout, ContactHeaderSection, ContactForm } from "../components";

const Contact = () => {
  return (
    <Layout paddingValues={true}>
      <ContactHeaderSection />
      <ContactForm />
    </Layout>
  );
};
export default Contact;
