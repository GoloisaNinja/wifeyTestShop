import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { ContactFormWrapper } from "./styles";

export function ContactForm() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "contactUs.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [content, setContent] = useState({
    product: "",
    message: "Message was sent successfully and we'll get back to you shortly.",
    confetti: true,
  });
  const [showModal, setShowModal] = useState(false);
  const { name, email, message } = formData;
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDismiss = () => {
    setShowModal(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setContent({ ...content, product: `Thank you ${name}!` });
    fetch("/", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: encode({ "form-name": "shop-contact", ...formData }),
    })
      .then(() => {
        setShowModal(true);
        setFormData({ name: "", email: "", message: "" });
        return console.log("Success!");
      })
      .catch(error => {
        console.log("error tripped");
        return alert(
          `Whoops - something unexpected happened...please try again later`
        );
      });
  };
  return (
    <ContactFormWrapper>
      <div>
        <form
          name="shop-contact"
          id="contact-form"
          method="POST"
          data-netlify="true"
          onSubmit={e => handleSubmit(e)}
        >
          <input type="hidden" name="shop-contact" value="contact" />
          <label htmlFor="name">Enter Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            required
          ></input>
          <label htmlFor="email">Enter Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          ></input>
          <label htmlFor="message">Enter Your Message</label>
          <textarea
            cols="30"
            rows="10"
            id="message"
            name="message"
            value={message}
            onChange={e => onChange(e)}
            required
          ></textarea>
          <Button
            width={"100%"}
            disabled={!name || !email || !message}
            $margin={"15px 0px 0px 0px"}
            $inverse="true"
            type="submit"
            onClick={e => handleSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
      <div>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt="an illustration of a women submitting details on the web"
        />
      </div>
      {showModal && <Modal dismiss={handleDismiss} content={content} />}
    </ContactFormWrapper>
  );
}
