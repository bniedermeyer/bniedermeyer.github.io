import React from 'react';

import { ReactComponent as Gmail } from '../../assets/gmail.svg';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import './contact.css';

/* eslint-disable-next-line */
export interface ContactProps {}

export const Contact = (props: ContactProps) => {
  return (
    <div className="contact">
      <h1>Let's stay in touch!</h1>
      <div className="contact-links flex centered">
        <a
          href="mailto:contact@brenden.dev"
          id="gmail-link"
          className="contact-link"
        >
          <Gmail className="contact-img" id="gmail-logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/bniedermeyer/"
          className="contact-link"
          id="linkedin-link"
        >
          <LinkedIn className="contact-img" id="linkedin-logo" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
